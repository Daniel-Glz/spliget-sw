import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon'

const formatPosts = function(posts) {
  if (!Array.isArray(posts)) {
    posts = [posts]
  }
  return posts.map((post) => {
    const { date, slug, title, categories, featuredImage, author, content, tags } = post;
    const { sourceUrl, altText, srcSet } = featuredImage ? featuredImage.node : {sourceUrl: null, altText: null, srcSet: null};
    const { name } = author ? author.node : {name: null};
    const { edges } = categories;
    const primaryCategory = edges.find((edge) => edge.isPrimary);
    const listCategories = edges.map((edge) => edge.node);

    const formattedPost = {
      date: date ? DateTime.fromISO(date).toFormat('dd LLL yyyy') : null,
      slug,
      title,
      author: name,
      content: content ? content : null,
      tags: tags ? tags.nodes : null,
      categories: listCategories,
      primaryCategory: primaryCategory.node,
      featuredImage: {
        sourceUrl,
        altText,
        srcSet,
      },
    };
    return formattedPost;
  });
}

const slugify = function(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
}

function removeDuplicates(originalArray, prop) {
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

const SortingByDate = function(posts) {
  return posts
  .sort((post1, post2) => {

    const beforeDate = DateTime.fromFormat(post1.date, "LLL dd yyyy");
    const afterDate = DateTime.fromFormat(post2.date, "LLL dd yyyy");
    return afterDate - beforeDate;
    
})
}

const HoverActiveClass = function(hoverRef) {
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

export {formatPosts, slugify, removeDuplicates, SortingByDate, HoverActiveClass};