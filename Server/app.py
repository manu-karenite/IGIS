import cloudinary
import cloudinary.uploader
import cloudinary.api
from time import time
from flask import Flask
from flask_cors import CORS
from flask import request
app=Flask(__name__)
CORS(app)

cloudinary.config( 
  cloud_name = "pet-life", 
  api_key = "876346913441587", 
  api_secret = "hheM-11okUBrmtytDeWpktMPuC4",
)


@app.route("/aadhar-validation",methods = ['POST'])

def aadharValidation():

    ans=(request.data.decode("utf-8"))
    ans=(ans[8:])
    ans=ans[::-1]
    ans=ans[2:]
    ans=ans[::-1]
    print(ans)

    try:
        result=cloudinary.uploader.upload(ans)
        print(result["secure_url"])
    except Exception as e:
        print(e)
        
    return {"msg":"Hello"}

if __name__ == "__main__":
    app.run(debug=False)