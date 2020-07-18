import React from 'react';
import { Button } from 'reactstrap';

const PostStatusFilter = () => {
    return (
        <div className='btn-group'>
            <Button         color="info">All posts </Button>
            <Button outline color="secondary">Liked posts </Button>
        </div>
    )
}
export default PostStatusFilter;