import { useState, useEffect } from 'react';
import { useModel } from '@umijs/max';
import './index.less';
import classnames from 'classnames';
import LeftFoldIcon from '@/components/Icons/LeftFold';
import LeftUnFoldIcon from '@/components/Icons/LeftUnfold';
import RightFoldIcon from '@/components/Icons/RightFold';
import RightUnFoldIcon from '@/components/Icons/RightUnfold';
import NiiViewer from '@/components/NiiViewer';
import DcmViewer from '@/components/DcmViewer';
import Header from '@/components/Header';
import ViewerLabel from '@/components/ViewerLabel';
import { URLPREFIX } from '@/const';

const DetailPage = () => {
    const [leftIsFold, setLeftIsFold] = useState(false);
    const [rightIsFold, setRightIsFold] = useState(false);
    const { niiVolumeId, dicmVolumeId } = useModel('useLabel');
    const [volumeId, setVolumeId] = useState<string>(niiVolumeId);

    const dicomId = {
        StudyInstanceUID:
            "1.3.6.1.4.1.14519.5.2.1.7009.2403.334240657131972136850343327463",
        SeriesInstanceUID:
            "1.3.6.1.4.1.14519.5.2.1.7009.2403.226151125820845824875394858561",
        wadoRsRoot: "https://d3t6nz73ql33tx.cloudfront.net/dicomweb"
    };

    useEffect(() => {
        const type = '.dcm';
        if (type === '.nii') {
            // const niftiUrl = 'https://ohif-assets.s3.us-east-2.amazonaws.com/nifti/CTACardio.nii.gz';// 61.2MB
            const niftiUrl = 'https://ohif-assets.s3.us-east-2.amazonaws.com/nifti/MRHead.nii.gz';
            const niiVolumeId = URLPREFIX + niftiUrl;
            setVolumeId(niiVolumeId);
        }
        if (type === '.dcm') {
            // setVolumeId(dicmVolumeId);
        }
    }, []);
    return (
        <div className='detailContainer'>
            <Header volumeId={volumeId}/>
            <div className='contentContainer'>
                <div className={classnames('leftContainer', {unfold: leftIsFold})}>
                    <div className='leftIconBox'>
                        {leftIsFold && <LeftFoldIcon onClick={() => setLeftIsFold(false)}/>}
                        {!leftIsFold && <LeftUnFoldIcon onClick={() => setLeftIsFold(true)}/>}
                    </div>
                </div>
                <div className='centerContainer'>
                    {/* <NiiViewer niiVolumeId={volumeId}/> */}
                    <DcmViewer dicomId={dicomId}/>
                </div>
                <div className={classnames('rightContainer', {unfold: rightIsFold})}>
                    <div className='rightIconBox'>
                        {rightIsFold && <RightFoldIcon onClick={() => setRightIsFold(false)}/>}
                        {!rightIsFold && <RightUnFoldIcon onClick={() => setRightIsFold(true)}/>}
                    </div>
                    <ViewerLabel volumeId={volumeId}/>
                </div>
            </div>
        </div>
    );
  };
  
  export default DetailPage;
  