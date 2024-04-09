import styles from './index.less';
// import Tools from '@/components/Tools';
interface HeaderProps {
    volumeId: string;
}
const Header = (props: HeaderProps) => {
    const { volumeId } = props;
    return (
        <div className={styles.headerContainer}>
            <div className={styles.toolBox}>
                {/* <Tools volumeId={volumeId}/> */}
            </div>
        </div>
    );
};
export default Header;