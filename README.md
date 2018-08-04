# Logic Server

* OTP-API
  - API that generates random number OTP with length 4
  - method : GET
  - path : /api/otp
  - req : None
  - res :
     otp - type : string

* DOOR-State-API
  - API that checks the door state
  - method : GET
  - path : /api/door
  - req : None
  - res :
     door state - "open" / "close" string type

* DOOR-Open-API
  - API that requests to open the door with length 4 OTP
  - method : PUT
  - path : /api/door
  - request :
     pwd - type : string
  - res :
     true - request permitted
     false - request denied

* Alcohol-Update-API
  - API that updates the alcohol concentration of user
  - method : PUT
  - path : /api/alcohol
  - request :
     value - type : float
  - res :
     value - type : float

* HOW TO RUN
 - cmd 켜고 /backend로 이동 -> set DEBUG=backend:* & npm start
