import React from 'react';
import {useForm} from "react-hook-form";
import {Button, Input, Select, RET} from "../index";
import appWriteService from "../../appwrite/configDB";
import { useNavigate } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';

const PostForm = ({post}) => {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active'
        }
    })
  return (
    <div>PostForm</div>
  )
}

export default PostForm