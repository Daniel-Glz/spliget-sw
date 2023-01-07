import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { remark } from 'remark'
import html from 'remark-html'

const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
}

const removeDuplicates = (originalArray, prop) => {
  var newArray = [];
  var lookupObject  = {};

  for(var i in originalArray) {
     lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for(i in lookupObject) {
      newArray.push(lookupObject[i]);
  }
   return newArray;
}

const SortingByDate = (posts) => {
  return posts
  .sort((post1, post2) => {

    const beforeDate = DateTime.fromFormat(post1.date, "LLL dd yyyy");
    const afterDate = DateTime.fromFormat(post2.date, "LLL dd yyyy");
    return afterDate - beforeDate;
    
})
}

const markdownToHtml = async (markdown) => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

const HoverActiveClass = (hoverRef) => {
	const [refLists, setrefLists] = useState([]);
	
	useEffect(() => {
		const refContainer = hoverRef.current.childNodes;
		setrefLists(refContainer);
	}, []);

	refLists.forEach((f) => {
		f.addEventListener("mouseenter", function () {
			refLists.forEach((e) => {
				var div = e.querySelector(".content-block");
				div.classList.add("axil-control");
				div.classList.remove("is-active");
			});
			this.querySelector(".content-block").classList.add("is-active");
		})
	});
}

const orderPostsByCategory = (posts, categories) => {
  let data = [];
  categories.forEach((category) => {
    if (category.toLowerCase() === "recientes") {
      data.push({ category, posts: posts.slice(0, 3) });
      return;
    }
    const filteredPosts = posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
    data.push({ category, posts: filteredPosts });
  });

  return data;
}

export { slugify, removeDuplicates, SortingByDate, HoverActiveClass, markdownToHtml, orderPostsByCategory};