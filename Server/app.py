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


if __name__ == "__main__":
    app.run(debug=False)