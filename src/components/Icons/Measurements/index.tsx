import Icon from '@ant-design/icons';
const svg = () => (
    <svg t="1711018668987" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1734" width="16" height="16"><path d="M858.585 19.692a145.723 145.723 0 1 1-104.685 247.1L272.7 760.004a145.723 145.723 0 1 1-30.445-25.206l488.054-500.264A145.723 145.723 0 0 1 858.585 19.692z m-693.17 771.939a66.954 66.954 0 1 0 0 133.907 66.954 66.954 0 0 0 0-133.907z m693.17-693.17a66.954 66.954 0 1 0 0 133.908 66.954 66.954 0 0 0 0-133.907z" p-id="1735" fill="#ffffff"></path></svg>
);
const segmentationIcon = (props: any) => (
    <Icon component={svg} {...props}/>
);
export default segmentationIcon;