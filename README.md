# :paperclip: Klimb.io
A node.js application to add candidate records from Excel to mongo database


## :closed_book:  Objective

● Make a node.js application to add candidate records from Excel to mongo database

## :orange_book: Requirements

● A web landing page as per wireframe

● Provide an excel upload option

● Success or Error Message

## :ledger: Tech stack

● Node.js - mandatory

● MongoDB - mandatory

● We can choose rest of the stack

## :green_book: Technical design

● Backend should have logical separation of Model & Controller

● Demonstrate the use of callbacks

## :blue_book: Data handling

● Add all properties defined in Excel into a mongo collection

● All properties can be stored as strings or any data type of your choice

## :ledger: Async-each-series

● Use async-each-series to process one candidate at a time, after reading from excel

● This has to be implemented in the API code

## :notebook_with_decorative_cover: Unique records

● Email id should be unique

● This validation should be implemented in the API code

● Duplicate check has to be done for each row against the database using a mongo query

● Skip row if duplicate exists in database

## :notebook: Test Data

● Use enclosed excel for test data

## :closed_book: API Response

● Return success if excel is processed

# Developed Solution

● Designed a Node.js application to add candidate records from Excel and it gets added to MongoDB

## Steps

### :one: Landing Page

This is the landing page of the website.

![Screenshot (3742)](https://user-images.githubusercontent.com/107871742/178321664-ea74146c-a81d-4200-ac45-10871f92ecb9.png)

### :two: Choose File

Choose the file by clicking on "choose file".

![Screenshot (3743)](https://user-images.githubusercontent.com/107871742/178322066-ddc09ace-ebd7-4743-8718-1c53a2f6a0a8.png)
![Screenshot (3745)](https://user-images.githubusercontent.com/107871742/178322139-7a35a0c6-61f3-44c1-bdba-9f6cc3a6ac13.png)


### :three: Upload Excel

Upload the excel file in .csv format by selecting the file



