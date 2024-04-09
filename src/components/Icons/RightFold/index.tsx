import Icon from '@ant-design/icons';
const rightFoldSvg = () => (
    <svg t="1710754691275" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2497" width="16" height="16"><path d="M434.752 480l-73.408-73.344a32 32 0 0 1 45.312-45.312l128 128a32 32 0 0 1 0 45.312l-128 128a32 32 0 0 1-45.312-45.312L434.752 544 64 544l0 320A96 96 0 0 0 160 960L704 960l0-896-544 0a96 96 0 0 0-96 96l0 320L434.752 480zM864 1024l-704 0A160 160 0 0 1 0 864l0-704a160 160 0 0 1 160-160l704 0A160 160 0 0 1 1024 160l0 704A160 160 0 0 1 864 1024zM768 960L864 960A96 96 0 0 0 960 864l0-704A96 96 0 0 0 864 64L768 64 768 960z" fill="#D9D9D9" p-id="2498"></path></svg>
);
const rightFoldIcon = (props: any) => (
    <Icon component={rightFoldSvg} {...props}/>
);
export default rightFoldIcon;