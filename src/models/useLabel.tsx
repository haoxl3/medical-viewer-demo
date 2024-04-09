import { useState, useRef } from 'react';
const useLabel = () => {
    const renderingEngineId = useRef('myRenderingEngine');
    const viewportId1 = useRef('CT_NIFTI_AXIAL');
    const viewportId2 = useRef('CT_NIFTI_SAGITTAL');
    const viewportId3 = useRef('CT_NIFTI_CORONAL');
    const toolGroupId = useRef('MY_TOOL_GROUP_ID');
    const segmentationId = useRef('SEGMENTATION_ID');
    // const niftiUrl = 'https://ohif-assets.s3.us-east-2.amazonaws.com/nifti/CTACardio.nii.gz';// 61.2MB
    // const [niiVolumeId, setNiiVolumeId] = useState<string>('nifti:' + niftiUrl);
    const [niiVolumeId, setNiiVolumeId] = useState<string>('');
    const [isCachedVolumeId, setIsCachedVolumeId] = useState<boolean>(false);
    const [dcmVolumeId, setDcmVolumeId] = useState<string>('');

    // Define a unique id for the volume
    const volumeName = 'CT_VOLUME_ID'; // Id of the volume less loader prefix
    const volumeLoaderScheme = 'cornerstoneStreamingImageVolume'; // Loader id which defines which volume loader to use
    const dicmVolumeId = `${volumeLoaderScheme}:${volumeName}`; // VolumeId with loader id + volume id
    return {
        renderingEngineId,
        viewportId1,
        viewportId2,
        viewportId3,
        dicmVolumeId,
        niiVolumeId,
        setNiiVolumeId,
        isCachedVolumeId,
        setIsCachedVolumeId,
        toolGroupId,
        segmentationId,
        dcmVolumeId,
        setDcmVolumeId
    };
};
export default useLabel;