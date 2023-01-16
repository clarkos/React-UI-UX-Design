import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from './imports.js'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is Hapening, We're blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imageUrl={blog01} date='Enero 02, 2023' title='Una entrada de blog' />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imageUrl={blog02} date='Enero 02, 2023' title='Una entrada de blog' />
          <Article imageUrl={blog03} date='Enero 02, 2023' title='Una entrada de blog' />
          <Article imageUrl={blog04} date='Enero 02, 2023' title='Una entrada de blog' />
          <Article imageUrl={blog05} date='Enero 02, 2023' title='Una entrada de blog' />
        </div>
      </div>
    </div>
  );
};

export default Blog;
