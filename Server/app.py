import cv2
import cloudinary
import cloudinary.uploader
import cloudinary.api
from time import time
from flask import Flask
from flask_cors import CORS
from flask import request
import numpy as np
import requests
import replicate
import os

app=Flask(__name__)
CORS(app)


cloudinary.config( 
  cloud_name = "pet-life", 
  api_key = "876346913441587", 
  api_secret = "hheM-11okUBrmtytDeWpktMPuC4",
)

def mse(img1, img2):
   height1, width1 = img1.shape[0],img1.shape[1]
   print(height1, width1)
   height2, width2 = img2.shape[0],img2.shape[1]
   print(height2, width2)
   min_height = min(height1, height2)
   min_width = min(width1, width2)
   print(min_height, min_width)
   img11 = img1[0:min_height, 0:min_width]
   img22 = img2[0:min_height, 0:min_width]

   diff = cv2.subtract(img11, img22)
   print(diff)
   err = np.sum(diff**2)
   print(err)
   mse = err/(float(min_height*min_width))
   return mse


@app.route("/aadhar-validation",methods = ['POST'])

def aadharValidation():
    print("hi")
    ans=(request.data.decode("utf-8"))
    ans=(ans[8:])
    ans=ans[::-1]
    ans=ans[2:]
    ans=ans[::-1]

    print(ans)

    try:
        result=cloudinary.uploader.upload(ans)
        print(result["secure_url"])
        return {"msg":result["secure_url"]}
    except Exception as e:
        print(e)

@app.route("/compare-images",methods = ['POST']) 
def compareImages():
    ans=(request.data.decode("utf-8"))
    ans=ans[9:]
    ans=ans[::-1]
    ans=ans[1:]
    ans=ans[::-1]

    ans=ans.split(",")
    url1=ans[0]
    url2=ans[1][8:]

    url1=url1[1:]
    url1=url1[::-1]
    url1=url1[1:]
    url1=url1[::-1]

    url2=url2[1:]
    url2=url2[::-1]
    url2=url2[1:]
    url2=url2[::-1]

    print(url1,url2)
    #one
    url = url1
    resp = requests.get(url, stream=True).raw
    image = np.asarray(bytearray(resp.read()), dtype="uint8")
    image = cv2.imdecode(image, cv2.IMREAD_COLOR)
    cv2.imshow('image',image)



    #two
    url = url2
    resp = requests.get(url, stream=True).raw
    image2 = np.asarray(bytearray(resp.read()), dtype="uint8")
    image2 = cv2.imdecode(image2, cv2.IMREAD_COLOR)
    cv2.imshow('image',image2)




    image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    image2 = cv2.cvtColor(image2, cv2.COLOR_BGR2GRAY)
    error = mse(image, image2)
    print("Image matching Error between the two images:", error)
    # img1 = cv2.imread("https://res.cloudinary.com/pet-life/image/upload/v1676316136/ilwkbmshkstly3eljdge.jpeg")
    # img2 = cv2.imread("https://res.cloudinary.com/pet-life/image/upload/v1676316221/dnfijg3bra7caz7dz3xe.jpeg")
    # img1 = cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)
    # print(img1)
    # img2 = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)
    # error = mse(img1, img2)
    # print("Image matching Error between the two images:", mse)
    return {"msg":str(error)}
@app.route("/generate-video",methods = ['POST']) 
def generate_video():
    os.environ["REPLICATE_API_TOKEN"] = "31cc8b413eda51e3cd24c01a3ba0b41b1ceff314"
    ans=(request.data.decode("utf-8"))
    ans=ans[12:]
    ans=ans[::-1]
    ans=ans[2:]
    ans=ans[::-1]
    print(ans)
    model = replicate.models.get("yuval-alaluf/sam")
    version = model.versions.get("9222a21c181b707209ef12b5e0d7e94c994b58f01c7b2fec075d2e892362f13c")
    inputs = {
    # facial image
    'image': ans,

    # age of the output image, when choose 'default' a gif for age from 0,
    # 10, 20,...,to 100 will be displayed
    'target_age': "default",
    }
    output = version.predict(**inputs)
    print(output)   
    return {"msg":output} 

@app.route("/generate-image",methods = ['POST']) 
def generate_image():
    os.environ["REPLICATE_API_TOKEN"] = "31cc8b413eda51e3cd24c01a3ba0b41b1ceff314"
    ans=(request.data.decode("utf-8"))

    ans=ans.split(",")

    link=ans[0]

    link=link[12:]
    link=link[::-1][1:][::-1]
    print(link)

    age=ans[1]
    age=age[6:]
    age=age[::-1][1:][::-1]
    print(age)

    model = replicate.models.get("yuval-alaluf/sam")
    version = model.versions.get("9222a21c181b707209ef12b5e0d7e94c994b58f01c7b2fec075d2e892362f13c")
    inputs = {
    # facial image
    'image': link,

    # age of the output image, when choose 'default' a gif for age from 0,
    # 10, 20,...,to 100 will be displayed
    'target_age': str(age),
    }
    output = version.predict(**inputs)
    print(output)   
    return {"msg":output} 


if __name__ == "__main__":
    app.run(debug=False)