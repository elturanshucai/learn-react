import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
    reducerPath: 'jsonPlaceholder',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getPostById: builder.query({
            query: (id) => `posts/${id}`,
            providesTags: (result, error, id) => [{ type: 'Post', id:id }]
        }),
        createPost: builder.mutation({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost
            })
        }),
        getPosts: builder.query({
            query: (page = 1) => `posts?_page=${page}&_limit=10`
        })
    }),
    keepUnusedDataFor: 30,
    refetchOnMountOrArgChange: 10
})

export const { useGetPostByIdQuery, useCreatePostMutation, useGetPostsQuery } = jsonPlaceholderApi;