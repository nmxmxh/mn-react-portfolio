import React from 'react';
import { connect } from 'react-redux';

import { Helmet } from 'react-helmet';

import './blog.styles.scss';

const Blog = ( { blog } ) => {

    return (
    <div className="blog">
        <Helmet>
            <title>Nobert's Portfolio | My self indulgent ramblings.</title>
        </Helmet>

        {
            blog.length <= 0 ?
            (
                <div className="empty-blog-container">No blog post(s) available at the moment.<br />(Work in progress).</div>
            )
            :
            (
                <div>Blog posts available</div>
            )
        }
    </div>
    )
};

const mapStateToProps = state => {
    return {
        blog: state.blog
    }
}

export default connect(mapStateToProps)(Blog);