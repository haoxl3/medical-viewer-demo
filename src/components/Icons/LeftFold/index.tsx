import Icon from '@ant-design/icons';
const leftFoldSvg = () => (
    <svg t="1710750544637" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1945" width="16" height="16"><path d="M589.248 544l73.408 73.344a32 32 0 0 1-45.312 45.312l-128-128a32 32 0 0 1 0-45.312l128-128a32 32 0 0 1 45.312 45.312L589.248 480H960v-320A96 96 0 0 0 864 64H320v896h544a96 96 0 0 0 96-96v-320H589.248zM160 0h704A160 160 0 0 1 1024 160v704a160 160 0 0 1-160 160h-704A160 160 0 0 1 0 864v-704A160 160 0 0 1 160 0zM256 64H160A96 96 0 0 0 64 160v704A96 96 0 0 0 160 960H256V64z" fill="#D9D9D9" p-id="1946"></path></svg>
);
const leftFoldIcon = (props: any) => (
    <Icon component={leftFoldSvg} {...props}/>
);
export default leftFoldIcon;