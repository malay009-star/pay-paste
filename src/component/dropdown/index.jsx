import { Button, Dropdown, Space } from 'antd';
import './dropdown.css'
const items = [
  {
    key: '1',
    label: (
      <p>ET</p>
    ),
  },
  {
    key: '2',
    label: (
      <p>BTC (Coming Soon)</p>
    ),
  },
  {
    key: '3',
    label: (
      <p>LT Coming soon</p>
    ),
  },
];
const App = () => (
  <Space direction="vertical">
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button>ET</Button>
      </Dropdown>
    </Space>
  </Space>
);
export default App;