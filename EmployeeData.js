//Establish Connection
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://bpscrohit:Rohit123@cluster0.rszwkl0.mongodb.net/"

//Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

//Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
    '''for db_name in client.list_database_names():
        print(db_name)*/''' #once sucessfully established connection
except Exception as e:
    print(e)

//Create a DB and a collection
new_db = client['employee_management']
employees_collection = new_db['employees']

//InsertOne Operation
//Insert One Employee
employee_data = {
    'employee_id': 101,
    'name': 'John Doe',
    'position': 'Software Developer',
    'department': 'IT'
}

result = employees_collection.insert_one(employee_data)

if result.inserted_id:
    # Data is inserted
    print("InsertOne Data inserted successfully!",result.inserted_id)
else:
    # Data insertion failed
    print("Failed to insert data.")

//Insert Many
//Insert Many Employees
employees_data = [
    {'employee_id': 102, 'name': 'Jane Smith', 'position': 'Data Scientist', 'department': 'Analytics'},
    {'employee_id': 103, 'name': 'Bob Johnson', 'position': 'Marketing Specialist', 'department': 'Marketing'}
]
result = employees_collection.insert_many(employees_data)

if result.inserted_ids:
    # Data is inserted
    print("InsertMany Data inserted successfully!",result.inserted_ids)
else:
    # Data insertion failed
    print("Failed to insert data.")

//FindOneOperation
//Find One Employee
query = {'employee_id': 101}
result = employees_collection.find_one(query)
print(result)

//FindAllOperation
//Find All Employees
all_employees = employees_collection.find()
for document in all_employees:
    print(document)

//UpdateOneOperation
//Update One Employee
query = {'employee_id': 101}
new_data = {'$set': {'position': 'Senior Software Developer'}}
result = employees_collection.update_one(query, new_data)
print(result)

//UpdateManyOperation
//Update All Employees
query = {}  # An empty query matches all documents
new_data = {'$set': {'department': 'Engineering'}}
result = employees_collection.update_many(query, new_data)
print(result)

//DeleteOneOperation
//Delete One Employee
query = {'employee_id': 102}
result = employees_collection.delete_one(query)
print(result)

//DeleteManyOperation
//Delete All Employees
query = {}  # An empty query matches all documents
result = employees_collection.delete_many(query)
print(result)


