import { Button, Col, Form, InputNumber, Row } from 'antd';
import './App.css';

function App() {
  return (
    <Row style={{
      padding: "32px"
    }}>
      <Col span={8} style={{ padding: "16px" }}>
        <h1>Add cache data</h1>
        <Form wrapperCol={{ span: 18 }} labelCol={{ span: 6 }}>
          <Form.Item name='lat' label="Latitude">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="long" label="Longtitude">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Row justify='space-evenly'>
            <Form.Item>
              <Button style={{ width: '128px' }} shape='round' type='primary' htmlType='submit'>Add</Button>
            </Form.Item>
          </Row>
        </Form>
      </Col>
      <Col span={8} style={{ padding: "16px" }}>
        <h1>Query location</h1>
        <Row>
          <h3>Result:</h3>
        </Row>
        <Form wrapperCol={{ span: 18 }} labelCol={{ span: 6 }}>
          <Form.Item name='lat' label="Latitude">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="long" label="Longtitude">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Row justify='space-evenly'>
            <Form.Item>
              <Button style={{ width: '128px' }} shape='round' type='primary' htmlType='submit'>Query</Button>
            </Form.Item>
          </Row>
        </Form>
      </Col>
      <Col>
      </Col>
    </Row>
  );
}

export default App;
