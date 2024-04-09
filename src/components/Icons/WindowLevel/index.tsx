import Icon from '@ant-design/icons';
const svg = () => (
    <svg t="1710930712067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1568" width="16" height="16"><path d="M512 0C227.84 0 0 227.84 0 512s227.84 512 512 512 512-227.84 512-512S796.16 0 512 0z m0 977.408V46.592c256 0 465.408 209.408 465.408 465.408S768 977.408 512 977.408z" p-id="1569" fill="#ffffff"></path></svg>
);
const windowLevelIcon = (props: any) => (
    <Icon component={svg} {...props}/>
);
export default windowLevelIcon;