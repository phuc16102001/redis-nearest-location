import { Button, Col, Descriptions, Form, Input, InputNumber, Row } from 'antd';
import api from 'utils/api';
import './App.css';
import swal from 'sweetalert2';
import { useState } from 'react';

function App() {

  const [result, setResult] = useState(undefined)

  const handleAdd = async (data) => {
    try {
      const requestBody = {
        long: +data.long,
        lat: +data.lat,
        label: data.label
      }
      const response = await api.post('/', requestBody)
      const { exitcode } = response.data
      if (exitcode === 0) {
        swal.fire({
          title: "Insert location",
          text: "Insert successfully",
          icon: "success",
          confirmButtonText: "OK"
        })
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleQuery = async (data) => {
    try {
      const params = {
        long: +data.long,
        lat: +data.lat,
        distance: +data.distance
      }
      const response = await api.get('/', { params })
      const { exitcode, locations } = response.data;
      if (exitcode === 0) {
        if (locations.length > 0) {
          swal.fire({
            title: "Query location",
            text: "Query successfully",
            icon: "success",
            confirmButtonText: "OK"
          })
          setResult(locations[0])
        } else {
          swal.fire({
            title: "Query location",
            text: "No location found",
            icon: "info",
            confirmButtonText: "OK"
          })
        }
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Row style={{
      padding: "32px"
    }}>
      <Row style={{ width: "100%" }} justify='space-evenly'>
        <h1>Redis cache demo</h1>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col span={12} style={{ padding: "16px" }}>
          <h2>Add cache data</h2>
          <Form onFinish={handleAdd} wrapperCol={{ span: 10 }} labelCol={{ span: 6 }}>
            <Form.Item name='lat' label="Latitude">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="long" label="Longitude">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="label" label="Label">
              <Input style={{ width: '100%' }} />
            </Form.Item>
            <Row justify='space-evenly'>
              <Form.Item>
                <Button style={{ width: '128px' }} shape='round' type='primary' htmlType='submit'>Add</Button>
              </Form.Item>
            </Row>
          </Form>
        </Col>
        <Col span={12} style={{ padding: "16px" }}>
          <h2>Query location</h2>
          <Form onFinish={handleQuery} wrapperCol={{ span: 10 }} labelCol={{ span: 6 }}>
            <Form.Item name='lat' label="Latitude">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="long" label="Longitude">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="distance" label="Distance">
              <InputNumber addonAfter={<div>m</div>} style={{ width: '100%' }} />
            </Form.Item>
            <Row justify='space-evenly'>
              <Form.Item>
                <Button style={{ width: '128px' }} shape='round' type='primary' htmlType='submit'>Query</Button>
              </Form.Item>
            </Row>
          </Form>
          <h3>Result:</h3>
          {result &&
            <Descriptions bordered column={2}>
              <Descriptions.Item label="Data" span={2}>
                {result.member}
              </Descriptions.Item>
              <Descriptions.Item label="Longitude">
                {result.coordinates.longitude}
              </Descriptions.Item>
              <Descriptions.Item label="Latitude">
                {result.coordinates.latitude}
              </Descriptions.Item>
              <Descriptions.Item label="Distance">
                {result.distance} m
              </Descriptions.Item>
            </Descriptions>
          }
        </Col>
      </Row>
    </Row>
  );
}

export default App;
