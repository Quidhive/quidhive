// 
'use client'

import axios from "axios";

// import Cookies from 'js-cookie';

const baseUrl = "https://waitlist.quidhive.com"

const checkUrl = (url: string) => {
  if (url.startsWith('/')) {
    return baseUrl + url
  } else {
    return `${baseUrl}/${url}`
  }
}

export const GetRequest = async (url: string) => {
  try {
    const response = await axios.get(checkUrl(url));
    return response;
  } catch (e: unknown) {
    if (axios.isAxiosError(e) && e.response) {
      return e.response;
    }
    throw e;
  }

};

export const PostRequest = async (url: string, data: any) => {
  try {
    const response = await axios.post(checkUrl(url), data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (e: unknown) {
    if (axios.isAxiosError(e) && e.response) {
      return e.response;
    }
    throw e;
  }
};


