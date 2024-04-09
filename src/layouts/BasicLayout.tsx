import { useState, useEffect } from 'react';
import { Outlet, useLocation, history } from 'umi';
import { Layout, ThemeConfig, ConfigProvider } from 'antd';
import { StyleProvider, GetAntdTheme } from 'antd-style';
import styles from './index.less';
const { Content } = Layout;

const BasicLayout = () => {
    const Theme: ThemeConfig | GetAntdTheme = {
        token: {
            colorPrimary: '#4443d3',
            colorInfo: '#4443d3',
            colorText: '#fff',
            colorBgElevated: '#11132b',
            colorBgContainer: '#11132b',
        },
        components: {
            Button: {
                colorPrimaryHover: 'rgba(34, 109, 194, .8)',
                defaultBg: '#11132b',
                defaultBorderColor: '#4443d3',
                defaultHoverBg: 'rgba(17, 19, 43, .8)',
                defaultHoverColor: '#4443d3'
            },
            Progress: {
                remainingColor: 'rgba(67, 67, 210, .3)'
            },
            Slider: {
                dotBorderColor: '#4443d3',
                handleColor: 'rgba(67, 67, 210, .5)',
                handleActiveColor: '#4443d3',
                railBg: 'rgba(67, 67, 210, .3)',
                railHoverBg: 'rgba(67, 67, 210, .5)',
                trackBgDisabled: '#4443d3',
                trackBg: 'rgba(67, 67, 210, .5)',
                trackHoverBg: '#4443d3',
                handleSize: 8
            },
            Popover: {
                titleMinWidth: 300
            },
            InputNumber: {
                addonBg: '#11132b', // 前/后置标签背景色
                activeBg: '#11132b', // 输入框激活状态时背景颜色
                activeBorderColor: '#4443d3', // 激活态边框色
                handleBorderColor: '#fff', // 操作按钮边框色
                handleHoverColor: '#fff', // 操作按钮悬浮颜色
                handleActiveBg: '#fff',// 操作按钮激活背景色
                controlWidth: 60, // 输入框宽度
                hoverBorderColor: '#4443d3', // 悬浮态边框色
            },
            Radio: {
                buttonSolidCheckedBg: '#4443d3',
                buttonSolidCheckedActiveBg: '#4443d3',
                buttonSolidCheckedHoverBg: '#4443d3',
            }
        }
    };
    
    return (
        <StyleProvider hashPriority="high">
            <ConfigProvider theme={Theme} prefixCls="viewer">
                <Layout className={styles.layoutContainer}>
                    <Content className={styles.contentContainer}>
                        <Outlet />
                    </Content>
                </Layout>
            </ConfigProvider>
        </StyleProvider>
    );
};
export default BasicLayout;