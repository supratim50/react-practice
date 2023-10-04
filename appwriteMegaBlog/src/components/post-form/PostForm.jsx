import React, { useCallback } from 'react';
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

    const navigate = useNavigate();
    const userData = useSelector(state => state.user.userData);

    const submit = async (data) => {
      if(post) {
        const file = data.image[0] ? appWriteService.uploadFile(data.image[0]) : null;

        if(file) {
          appWriteService.deleteFile(post.featuredImage)
        }

        const dbPost = await appWriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined
        })

        if(dbPost) {
          navigate(`/post/${dbPost.$id}`)
        } 
      } else {
          const file = await appWriteService.uploadFile(data.image[0]);

          if(file) {
            const fileId = file.$id;
            data.featuredImage = fileId;
            const dbPost = await appWriteService.createPost({
              ...data,
              userId: userData.$id
            })
            if(dbPost) {
              navigate(`/post/${dbPost.$id}`);
            }
          }
      }
    }

    

  return (
    <div>PostForm</div>
  )
}

export default PostForm