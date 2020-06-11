import React from 'react';


const PostAddForm = () => {
    return (
        <form className='bottom-panel d-flex'>
            <input
                type='text'
                placeholder='What is on your mind?'
                className='from-control new-post-label'
            />

             <buttton
                type='submit'
                className='btn btn-outline-secondary'>

             Add post </buttton>

        </form>
    )
}
export default PostAddForm;