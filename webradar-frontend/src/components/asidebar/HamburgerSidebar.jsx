import { useState } from 'react';
import { Layout, Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import CloudIco from '../icons/CloudIco';
import CloudSun from '../icons/CloudSun';

const { Sider } = Layout;

function HamburgerSidebar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} className="lg:hidden" />
      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<CloudSun />}>
            Resumen diario
          </Menu.Item>
          <Menu.Item key="2" icon={<CloudIco />}>
            Historico
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
}

export default HamburgerSidebar;
