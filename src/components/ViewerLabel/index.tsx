
import { useState, useRef } from 'react';
import { useModel } from '@umijs/max';
import { Tooltip, Button } from 'antd';
import { cache, metaData, volumeLoader } from '@cornerstonejs/core';
import * as cornerstoneTools from '@cornerstonejs/tools';
import { adaptersSEG, helpers } from '@cornerstonejs/adapters';
import dcmjs from "dcmjs";
import SegmentationIcon from '@/components/Icons/Segmentation';
import MeasurementsIcon from '@/components/Icons/Measurements';
import styles from './index.less';


// const { Cornerstone3D } = adaptersSEG;
// const { downloadDICOMData } = helpers;
const {
    RectangleROITool,
    segmentation,
    Enums: csToolsEnums,
} = cornerstoneTools;

interface Props {
    volumeId: string;
}

const ViewerLabel = (props: Props) => {
    const [selectType, setSelectType] = useState('');
    const activeType = useRef('');
    const segmentationRepresentationUID = useRef();
    const { toolGroupId, segmentationId } = useModel('useLabel');
    const segmentationVolume = useRef();
    const { volumeId } = props;

    const labels = [
        {
            key: 'segmentation',
            label: <SegmentationIcon/>
        }, {
            key: 'measurements',
            label: <MeasurementsIcon/>
        }
    ];
    // const generateMockMetadata = (segmentIndex, color) => {
    //     const RecommendedDisplayCIELabValue = dcmjs.data.Colors.rgb2DICOMLAB(
    //         color.slice(0, 3).map((value: any) => value / 255)
    //     ).map((value: any) => Math.round(value));
      
    //     return {
    //         SegmentedPropertyCategoryCodeSequence: {
    //             CodeValue: "T-D0050",
    //             CodingSchemeDesignator: "SRT",
    //             CodeMeaning: "Tissue"
    //         },
    //         SegmentNumber: segmentIndex.toString(),
    //         SegmentLabel: "Tissue " + segmentIndex.toString(),
    //         SegmentAlgorithmType: "SEMIAUTOMATIC",
    //         SegmentAlgorithmName: "Slicer Prototype",
    //         RecommendedDisplayCIELabValue,
    //         SegmentedPropertyTypeCodeSequence: {
    //             CodeValue: "T-D0050",
    //             CodingSchemeDesignator: "SRT",
    //             CodeMeaning: "Tissue"
    //         }
    //     };
    // }
    // const downloadSeg = async () => {
    //     debugger
    //     segmentationRepresentationUID.current = await segmentation.addSegmentationRepresentations(toolGroupId.current, [
    //         {
    //             segmentationId: segmentationId.current,
    //             type: csToolsEnums.SegmentationRepresentations.Labelmap
    //         }
    //     ]);
    //     debugger
    //     segmentationVolume.current = await volumeLoader.createAndCacheDerivedSegmentationVolume(volumeId, {
    //         volumeId: segmentationId.current
    //     });
    //     debugger
    //     const volume = cache.getVolume(volumeId);
    //     const segUID = segmentationRepresentationUID.current[0];

    //     const images = volume?.getCornerstoneImages();

    //     const labelmapObj = Cornerstone3D.Segmentation.generateLabelMaps2DFrom3D(segmentationVolume);
    //     // Generate fake metadata as an example
    //     labelmapObj.metadata = [];
    //     labelmapObj.segmentsOnLabelmap.forEach((segmentIndex: any) => {
    //         const color = segmentation.config.color.getColorForSegmentIndex(
    //             toolGroupId.current,
    //             segUID,
    //             segmentIndex
    //         );

    //         const segmentMetadata = generateMockMetadata(segmentIndex, color);
    //         labelmapObj.metadata[segmentIndex] = segmentMetadata;
    //     });
    //     const generatedSegmentation =
    //         Cornerstone3D.Segmentation.generateSegmentation(
    //             images,
    //             labelmapObj,
    //             metaData
    //         );

    //     downloadDICOMData(generatedSegmentation.dataset, "mySEG.dcm");
    // };
    const typeHandle = (key: string) => {
        setSelectType(key);
        activeType.current = key;
    };
    const downloadHandle = () => {
        if (activeType.current === 'measurements') {
            const element = document.querySelector('#axial');
            const annotations = cornerstoneTools?.annotation.state.getAnnotations(RectangleROITool.toolName, element);
            console.log(annotations);
        } 
        // else {
        //     downloadSeg();
        // }
    };
    return (
        <div className={styles.labelContainer}>
            <div className={styles.labelHeaderBox}>
                {labels.map(item => 
                    <Tooltip title={item.key} color="#4443d3" key={item.key}>
                        <span onClick={() => typeHandle(item.key)} className={`${selectType === item.key && styles.active}`}>{item.label}</span>
                    </Tooltip>
                )}
            </div>
            <div className={styles.footerBox}>
                <Button onClick={downloadHandle} size="small">Export</Button>
            </div>
        </div>
    );
}
export default ViewerLabel;