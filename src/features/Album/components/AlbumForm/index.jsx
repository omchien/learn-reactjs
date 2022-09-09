import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './styles.scss';

AlbumForm.propTypes = {
  onSubmit: PropTypes.func,
};

AlbumForm.defaultProps = { onSubmit: null };

function AlbumForm({ onSubmit }) {
  // const [albumTitle, setAlbumTitle] = useState('');
  // const [albumThumbnailUrl, setalbumThumbnailUrl] = useState('');

  const [form] = Form.useForm();

  // const handleTitleChange = (e) => {
  //   setAlbumTitle(e.target.value);
  // };

  // const handleThumbnailChange = (e) => {
  //   setalbumThumbnailUrl(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!onSubmit) return;

  //   const formValues = {
  //     title: albumTitle,
  //     thumbnailUrl: albumThumbnailUrl,
  //   };

  //   onSubmit(formValues);

  //   setAlbumTitle('');
  //   setalbumThumbnailUrl('');
  // };

  const handleSubmit = (formValues) => {
    if (onSubmit) onSubmit(formValues);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please enter title',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="ThumnailUrl"
        name="thumbnailUrl"
        rules={[
          {
            required: true,
            message: 'Please enter thumnail url',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    // <form className="album-form" onSubmit={handleSubmit}>
    //   <input type="text" value={albumTitle} placeholder="title" onChange={handleTitleChange} />
    //   <input
    //     type="text"
    //     value={albumThumbnailUrl}
    //     placeholder="thumbnail url"
    //     onChange={handleThumbnailChange}
    //   />
    //   <input type="submit" />
    // </form>
  );
}

export default AlbumForm;
