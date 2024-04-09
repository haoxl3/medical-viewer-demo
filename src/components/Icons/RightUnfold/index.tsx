import Icon from '@ant-design/icons';
const rightUnfoldSvg = () => (
    <svg t="1710754664422" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2362" width="16" height="16"><path d="M470.656 617.344a32 32 0 1 1-45.312 45.31200001l-128-128.00000001a31.872 31.872 0 0 1 0-45.312l128-128.00000001a32 32 0 0 1 45.312 45.31200001L397.248 480 704 480 704 64l-544 0a96 96 0 0 0-96 96l0 704A96 96 0 0 0 160 960L704 960l0-416-306.752 0L470.656 617.344zM864 1024l-704 0A160 160 0 0 1 0 864l0-704a160 160 0 0 1 160-160l704 0A160 160 0 0 1 1024 160l0 704A160 160 0 0 1 864 1024zM768 960L864 960A96 96 0 0 0 960 864l0-704A96 96 0 0 0 864 64L768 64 768 960z" fill="#D9D9D9" p-id="2363"></path></svg>
);
const rightUnFoldIcon = (props: any) => (
    <Icon component={rightUnfoldSvg} {...props}/>
);
export default rightUnFoldIcon;