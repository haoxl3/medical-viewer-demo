import styles from './index.less';
import { useEffect } from 'react';
import { useModel } from '@umijs/max';
import {
    RenderingEngine,
    Types,
    Enums as csEnums,
    volumeLoader,
    setVolumesForViewports
} from '@cornerstonejs/core';
import initDicom from '@/cornerstone/index';
import { setCtTransferFunctionForVolumeActor, createImageIdsAndCacheMetaData } from '@/cornerstone/utils/index';

const { ViewportType } = csEnums;

interface viewerProps {
    dicomId: any;
}
const DcmViewer = (props: viewerProps) => {
    const { dicomId } = props;
    const { viewportId1, viewportId2, viewportId3, dicmVolumeId} = useModel('useLabel');
    const init = async () => {
        await initDicom();
        // 获取Cornerstone imageid并将元数据获取到RAM中
        const imageIds = await createImageIdsAndCacheMetaData({
            StudyInstanceUID:
                "1.3.6.1.4.1.14519.5.2.1.7009.2403.334240657131972136850343327463",
            SeriesInstanceUID:
                "1.3.6.1.4.1.14519.5.2.1.7009.2403.226151125820845824875394858561",
            wadoRsRoot: "https://d3t6nz73ql33tx.cloudfront.net/dicomweb"
        });
        
        // Define a unique id for the volume
        // const volumeName = 'CT_VOLUME_ID'; // Id of the volume less loader prefix
        // const volumeLoaderScheme = 'cornerstoneStreamingImageVolume'; // Loader id which defines which volume loader to use
        // const volumeId = `${volumeLoaderScheme}:${volumeName}`; // VolumeId with loader id + volume id
        // Define a volume in memory
        const volume = await volumeLoader.createAndCacheVolume(dicmVolumeId, {
            imageIds,
        });

        // Instantiate a rendering engine
        const renderingEngineId = 'myRenderingEngine';
        const renderingEngine = new RenderingEngine(renderingEngineId);
        // Create a stack viewport
        // const viewportId = 'CT_SAGITTAL_STACK';
        const viewportInputArray = [
            {
                viewportId: viewportId1.current,
                type: csEnums.ViewportType.ORTHOGRAPHIC,
                element: document.querySelector('#axial'),
                defaultOptions: {
                    orientation: csEnums.OrientationAxis.AXIAL
                }
            },
            {
                viewportId: viewportId2.current,
                type: csEnums.ViewportType.ORTHOGRAPHIC,
                element: document.querySelector('#sagittal'),
                defaultOptions: {
                    orientation: csEnums.OrientationAxis.SAGITTAL
                }
            },
            {
                viewportId: viewportId3.current,
                type: csEnums.ViewportType.ORTHOGRAPHIC,
                element: document.querySelector('#coronal'),
                defaultOptions: {
                    orientation: csEnums.OrientationAxis.CORONAL
                }
            }
        ];
        // renderingEngine.enableElement(viewportInput);
        renderingEngine.setViewports(viewportInputArray);
        // Get the stack viewport that was created
        // const viewport = (
        //     renderingEngine.getViewport(viewportId)
        // );
        
        // Set the volume to load
        volume.load();
        
        // 在视图上设置Volume
        setVolumesForViewports(renderingEngine, [{volumeId: dicmVolumeId, callback: setCtTransferFunctionForVolumeActor}], viewportInputArray.map((v) => v.viewportId));

        // Render the image
        renderingEngine.renderViewports([viewportId1.current, viewportId2.current, viewportId3.current]);
    };
    useEffect(() => {
        if (dicmVolumeId) {
            init();
        }
    }, [dicmVolumeId]);
    return (
        <div className={styles.niiViewContainer}>
            <div className={styles.flexItem}>
                <div id="axial" className={styles.canvasBox}>
                    <span className={styles.sliceType}>A</span>
                </div>
                <div id="sagittal" className={styles.canvasBox}>
                    <span className={styles.sliceType}>S</span>
                </div>
            </div>
            <div className={styles.flexItem}>
                <div id="coronal" className={styles.canvasBox}>
                    <span className={styles.sliceType}>C</span>
                </div>
                <div></div>
            </div>
        </div>
    );
};
export default DcmViewer;