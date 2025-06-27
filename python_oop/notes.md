# Understanding Object-Oriented Programming (OOP) in Python

## What is OOP?
Object-Oriented Programming (OOP) is a programming paradigm where data and behaviors are bundled into objects. Each object:
- Has **attributes** (information it stores).
- Has **methods** (functions tied to the object).
###### Methods can be:
- **Normal methods** – Defined by the user, such as `def my_method(self):`.
- **Dunder (special) methods** – Built-in methods with special meanings, like `__init__`, `__str__`, etc.

---

Examples:
- A `list` object has methods like `.append()` and `.sort()` to manipulate the list.
- A `datetime` object has attributes like `year`, `month`, and `day` to access specific information.

---

## Attributes vs Methods
- **Attributes**: Bits of information about the object. You access them directly without parentheses.
  - Example: `datetime.now().year` (accesses the year attribute).
- **Methods**: Actions or behaviors the object can perform. You call them with parentheses.
  - Example: `my_list.append(4)` (calls the append method on the list).

---

## Key Differences Between Functions and Methods
- **Functions**: Independent and not tied to any object.
  - Example: `print("Hello")`.
- **Methods**: Associated with an object and require an instance to be called.
  - Example: `my_list.append(4)`.

---

## Built-in Python Objects and Their Behaviors

### Example 1: Working with Lists
```python
# Creating a list
my_list = [1, 2, 3]

# Inspecting list attributes and methods
print(dir(my_list))  # Returns all attributes and methods

# Appending an item
my_list.append(4)
print(my_list)  # Output: [1, 2, 3, 4]

# Trying an unsupported method for lists
my_tuple = (1, 2, 3)
my_tuple.append(4)  # Raises an AttributeError

# Tuples do not support append, but they have other methods
my_tuple = (1, 2, 1)
print(dir(my_tuple))

# Using a valid tuple method
print(my_tuple.count(1))  # Output: 2 (the value '1' appears twice)

from datetime import datetime

# Creating a datetime object
dt = datetime.now()
print(dt)  # Outputs the current date and time

# Accessing attributes (day, month, year)
print(dt.day)   # Outputs the day
print(dt.month) # Outputs the month
print(dt.year)  # Outputs the year

# Accessing methods (strftime for formatting)
formatted_date = dt.strftime("%Y-%m-%d")
print(formatted_date)  # Outputs the date in 'YYYY-MM-DD' format
```

### Key Difference Between Attributes and Methods
Attributes (e.g., dt.day, dt.year) do not require parentheses.
Methods (e.g., dt.strftime()) require parentheses because they perform actions.

### Dynamic Attribute Addition in Python

When you create an object like in the example:

```python  
class HumanPerson:  
    pass  

john = HumanPerson()  
john.name = "John"  # Dynamically adds a new attribute
```

#### What Happens?

##### Dynamic Attribute Addition  
- Python allows **dynamically adding attributes** to an instance (object) of a class.  
- The attribute `name` was not defined within the `HumanPerson` class, but it was added **only to the object `john`**.  
- There could be `__slots__`, which limits dynamicaly adding attributes to only predefined in class

##### Instance vs. Class  
- This new attribute `name` exists **only at the instance level** (`john`), not at the class level of `HumanPerson`.  

```python  
jane = HumanPerson()  
print(hasattr(jane, "name"))  # False, because the 'name' attribute exists only for the instance `john`  
```

##### Key Takeaways
- Python objects have both attributes (data) and methods (behaviors).
- Use dir() to explore available attributes and methods.
- Use getattr() to dynamically access attributes or methods.
- Use callable() to check if an object is a method or an attribute.
- OOP allows you to define your own objects with specific attributes and methods, which we'll explore in future examples.


#### Class Variables vs Instance Variables

##### 1. Class Variables
- Shared across all instances of the class.  
- Defined directly in the body of the class.  
- Exist as soon as the class is called.  
- Changing these variables affects all instances of the class (unless overridden at the instance level).  

##### 2. Instance Variables
- Specific to each instance of the object.  
- Typically defined inside the `__init__` method (or other methods) using `self`.  
- Created when an instance of the object is initialized.  

# Python Objects: Mutable vs Immutable

## Mutable vs Immutable Summary

| **Type**           | **Mutable** | **Immutable** | **Example Usage**                         |
|--------------------|-------------|---------------|-------------------------------------------|
| **List**           | ✅          | ❌            | List of elements: `[1, 2, 3]`             |
| **Tuple**          | ❌          | ✅            | Immutable sequence: `(1, 2, 3)`           |
| **Dict**           | ✅          | ❌            | Dictionary: `{"key": "value"}`            |
| **Set**            | ✅          | ❌            | Set: `{1, 2, 3}`                          |
| **String**         | ❌          | ✅            | Text string: `"hello"`                    |
| **Int, Float**     | ❌          | ✅            | Integers or floats: `42`, `3.14`          |
| **Custom Classes** | Depends on implementation | Depends on implementation | Classes can be mutable or immutable        |
| **Bytes**          | ❌          | ✅            | Byte sequence: `b'hello'`                 |
| **Bytearray**      | ✅          | ❌            | Mutable byte sequence: `bytearray(b'hello')` |
| **Frozenset**      | ❌          | ✅            | Immutable set: `frozenset({1, 2, 3})`      |

---

### **What Can Be Used for Mutable vs Immutable?**

| **Operation / Function** | **Mutable**                     | **Immutable**                                     |
|--------------------------|---------------------------------|---------------------------------------------------|
| **Change Content**       | ✅ (`list.append(4)`)           | ❌ (Cannot change content)                        |
| **Create a Copy**        | ✅ (`copy.copy()`)              | Not needed (new value = new object)               |
| **Use as Dict Key**      | ❌ (Not hashable)                | ✅ (Hashable, if immutable)                       |
| **Use in Set**           | ❌ (Not hashable)                | ✅                                               |
| **Hashing (`hash()`)**   | ❌ (Not supported)               | ✅                                               |
| **`id()`**               | ✅                               | ✅                                               |

---

### **Explanation of Terms**

#### **1. `id()`**
- Returns a **unique identifier for an object** for its entire existence.
- Typically corresponds to the **memory address of the object**.
- **Usage**:
  ```python
  a = [1, 2, 3]
  print(id(a))  # e.g., 140699762329216
  ```
#### **2. `hash()`**
- Returns the hash value of an object (if the object is hashable).
- Used in hash-based structures, such as dict or set.
- Works only for immutable objects:
- **Usage**:
  ```python
  a = (1, 2, 3)  # Tuple
  print(hash(a))  # e.g., 529344067295497451
  ```

<__main__.ClassName object at 0x...>
#### **3. `<__main__.ClassName object at 0x...>`**
- Default representation of an object in Python (if the class does not define its own __str__ or __repr__ method).
- Breakdown of the output:
  - <...>: The object is displayed within angle brackets.
  - __main__: The module where the class was defined.
  - ClassName: The name of the object's class.
  - 0x...: Hexadecimal representation of the object's memory address.
- **Usage**:
  ```python
  class HumanPerson:
    pass
  
  person_a = HumanPerson()
  print(person_a)  # <__main__.HumanPerson object at 0x00000156EB1A03D0>
  ```

# Instance attributes
## Key Concepts

### 1. What is an Instance Attribute?
- An **attribute** is a piece of information associated with an instance of a class.
- Each instance can have the same attribute name but hold **different values**.
- Example: In a `Person` class, multiple instances might have a `name` attribute, but each instance can have a unique name.

```python  
class Person:  
    pass  

john = Person()  
john.name = "John"  # Instance attribute for the instance 'john'  
sarah = Person()  
sarah.name = "Sarah"  # Instance attribute for the instance 'sarah'  
```
### 2. Setting Attributes
- Attributes can be set directly on an instance using **dot notation**.
- Example:

```python  
john = Person()  
john.name = "John"  
john.age = 30  

print(john.name)  # Output: John  
print(john.age)   # Output: 30  
```
### 3. Redefining Attributes
- Instance attributes can be **updated or redefined** after they are set.
- Example:

```python  
print(john.name)  # Output: John  
john.name = "Johnny"  # Redefine the attribute  
print(john.name)  # Output: Johnny  
```
### 4. Using the `dir()` Function
- The `dir()` function lists all attributes and methods of an object.
- Example:

```python  
print(dir(john))  # Shows 'name' and 'age' if they are defined  
```
---

## Two Ways to Set Attributes

### 1. Direct Assignment to Instances
- Attributes can be added directly to an instance.

```python  
john = Person()  
john.name = "John"  
john.age = 30  
```
### 2. Using Class Definitions
- Attributes can be defined **inside the class**. These attributes are shared across all instances unless overridden.

```python  
class House:  
    bedrooms = 4  
    doors = 16  

my_house = House()  
print(my_house.bedrooms)  # Output: 4  
print(my_house.doors)     # Output: 16  
```
---

## Incrementing or Updating Attributes
- Attributes can be updated using operators like `+=` or `-=`.

```python  
my_house.doors += 1  # Add a door  
print(my_house.doors)  # Output: 17  

my_house.bedrooms -= 1  # Remove a bedroom  
print(my_house.bedrooms)  # Output: 3  
```
---

## Practice Suggestions
1. Create three classes of your choice.
2. For each class:
   - Create an instance.
   - Add attributes to the instance using **dot notation**.
   - Print the attributes.
   - Redefine the attributes and print them again.
3. Use the increment operator (`+=`) to update one of the attributes.

---

## Recap
- **Instance attributes** are specific pieces of information tied to an instance of a class.
- They can be **set**, **accessed**, and **redefined** using dot notation.
- Attributes can differ between instances of the same class.

# Instance methods
## What is an Instance Method?
- An **instance method** is a function that is **attached to a class** and operates on instances of that class.
- Unlike standalone functions (e.g., `print()`, `len()`), methods are always called on an instance using **dot notation** (e.g., `object.method()`).

### Key Characteristics:
- Methods are defined inside the class.
- They **must include `self`** as the first parameter, which refers to the specific instance calling the method.
- They provide functionality **strictly tied to a class instance**.

### Example: Instance Method
```python  
class Person:  
    def print_name(self):  
        print(f"My name is {self.name}")  
```
---

## Understanding `self`
- **`self`** refers to the **instance** calling the method.
- It allows the method to access and modify instance-specific attributes.

### Why `self` is Needed:
- If we have multiple instances of a class, each instance can have different data.
- Using `self`, we ensure that the method operates on the correct instance.

### Example: Accessing `self`
```python  
class Person:  
    def __init__(self, name, age):  
        self.name = name  
        self.age = age  

    def increment_age(self):  
        self.age += 1  # Modify instance-specific attribute  

john = Person("John", 25)  
john.increment_age()  
print(john.age)  # Output: 26  
```
---

## Creating Instance Methods

### 1. Basic Method
```python  
class Person:  
    def __init__(self, name, age):  
        self.name = name  
        self.age = age  

    def print_info(self):  
        print(f"Name: {self.name}, Age: {self.age}")  

john = Person("John", 25)  
john.print_info()  # Output: Name: John, Age: 25  
```
### 2. Modifying Attributes
```python  
class Person:  
    def set_age(self, new_age):  
        self.age = new_age  

john = Person("John", 25)  
john.set_age(30)  
print(john.age)  # Output: 30  
```
---

## Practice Task: Train Class

1. Create a `Train` class with:
   - Two attributes: `cars` and `car_capacity`.
   - A method to print the number of cars.
   - A method to calculate the total capacity of the train.

### Example Solution:
```python  
class Train:  
    def __init__(self, cars, car_capacity):  
        self.cars = cars  
        self.car_capacity = car_capacity  

    def print_number_of_cars(self):  
        print(f"Number of cars: {self.cars}")  

    def calculate_total_capacity(self):  
        total_capacity = self.cars * self.car_capacity  
        print(f"Total capacity: {total_capacity}")  

train = Train(10, 35)  
train.print_number_of_cars()  # Output: Number of cars: 10  
train.calculate_total_capacity()  # Output: Total capacity: 350  
```
---

## Recap
- **Instance methods** are tied to a class and its instances.
- They operate on instance-specific data using `self`.
- `self` ensures that the method accesses and modifies attributes of the correct instance.


# Python Constructors

## What is a Constructor?

A constructor is a special method in Python that is automatically called when a new object (instance) of a class is created. It is used to:
- Set up initial attributes for the object.
- Perform specific tasks, like initializing default values or running methods upon object creation.

The most common constructor in Python is the **`__init__`** method, but Python also uses **`__new__`** for creating objects in memory before initializing them.

---

## Constructor Workflow

1. **`__new__`**:
   - Allocates memory for the object.
   - Creates the instance and returns it.
   - Rarely customized unless a special object creation process is required.

2. **`__init__`**:
   - Initializes the instance's attributes.
   - Sets up the object's initial state.

---

## Example: Using a Constructor

```python
class Person:
    def __init__(self, name: str, age: int = 30):
        self.name = name.title()  # Ensures the name is title-cased
        self.age = age  # Assigns the age
        self.hometown = "London"  # Default hometown for all instances

# Creating instances
john = Person("john", 45)
alice = Person("alice")

# Access attributes
print(john.name)       # Output: John
print(john.age)        # Output: 45
print(john.hometown)   # Output: London

print(alice.name)      # Output: Alice
print(alice.age)       # Output: 30
print(alice.hometown)  # Output: London
```
---

## Key Points About Constructors

1. **Automatic Execution**:
   - The constructor is called automatically when an object is created.

2. **Parameters**:
   - You can pass parameters to customize the initialization of each object.

3. **Default Arguments**:
   - Default values can be used, as shown in `age=30`.

4. **Instance Attributes**:
   - Attributes set using `self` are specific to the instance.

---

## Using `self` in Constructors

- **`self`** refers to the instance of the class.
- It allows you to set or access instance-specific data.
```
python
class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

john = Person("John", 45)
print(john.name)  # Access instance attribute
# Output: John
```
---

## Advanced Example: Adding Type Hints and Defaults

```python
class Employee:
    def __init__(self, name: str, role: str = "Employee", salary: int = 50000):
        self.name = name
        self.role = role
        self.salary = salary

# Creating instances
emp1 = Employee("Alice", "Manager", 70000)
emp2 = Employee("Bob")

# Access attributes
print(emp1.name, emp1.role, emp1.salary)  # Output: Alice Manager 70000
print(emp2.name, emp2.role, emp2.salary)  # Output: Bob Employee 50000
```
---

## Using `vars()` to Inspect Attributes

The `vars()` function can be used to inspect an object's attributes in the form of a dictionary.

```python
print(vars(emp1))
# Output: {'name': 'Alice', 'role': 'Manager', 'salary': 70000}

print(vars(emp2))
# Output: {'name': 'Bob', 'role': 'Employee', 'salary': 50000}
```
---

## Summary

- **Constructors** like `__init__` are used to set up an object's initial state.
- They allow you to define attributes, set default values, and perform initial setup.
- `self` represents the specific instance being created, allowing you to set or access instance attributes.
- The `vars()` function provides a quick way to inspect an object's attributes.


# Class Attributes vs Instance Attributes

## **What is a Class Attribute?**
- A **class attribute** is a value shared among all instances of a class.
- It belongs to the **class itself**, not individual instances.
- It is defined at the **class level**, outside the `__init__` method.

---

## **Class Attributes vs Instance Attributes**

| **Attribute Type**     | **Class Attribute**                                                                 | **Instance Attribute**                                                                 |
|-------------------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| **Definition**          | Defined at the class level.                                                       | Defined inside the `__init__` method.                                                |
| **Scope**               | Shared by all instances of the class.                                             | Unique to each instance.                                                             |
| **Access**              | Can be accessed via the class or any instance.                                     | Can only be accessed via the specific instance.                                       |
| **Example Use Case**    | Shared properties like `wheels = 2` for all motorbikes.                            | Unique properties like `power` or `color` for individual motorbikes.                 |
| **Mutability**          | Changes affect all instances if modified through the class.                       | Changes affect only the specific instance.                                           |

---

## **Example: Class Attribute vs Instance Attribute**

### Code Example:
```python
class Motorbike:
    # Class attribute
    wheels = 2

    def __init__(self, power, color):
        # Instance attributes
        self.power = power
        self.color = color

# Creating instances
bike_a = Motorbike(125, "red")
bike_b = Motorbike(250, "green")

# Accessing attributes
print(bike_a.wheels)  # Output: 2 (class attribute)
print(bike_b.wheels)  # Output: 2 (class attribute)

print(bike_a.power)   # Output: 125 (instance attribute)
print(bike_b.color)   # Output: green (instance attribute)
```
---

## **Changing Class Attributes**

 - Class attributes can be modified through the class itself:
```python
Motorbike.wheels = 3
print(bike_a.wheels)  # Output: 3
print(bike_b.wheels)  # Output: 3
```
- Changing class attributes through an instance creates a new instance-specific attribute:
```python
bike_a.wheels = 4
print(bike_a.wheels)  # Output: 4 (instance-specific now)
print(bike_b.wheels)  # Output: 3 (class attribute remains unchanged)
```
---

## **Special Use Case: Tracking Instances**
You can use a class attribute to track how many instances of a class have been created:
```python
class Motorbike:
    wheels = 2
    instock = 0  # Class attribute to count instances

    def __init__(self, power, color):
        self.power = power
        self.color = color
        Motorbike.instock += 1  # Increment instance count

# Creating instances
bike_a = Motorbike(125, "red")
bike_b = Motorbike(250, "green")

print(Motorbike.instock)  # Output: 2 (total number of instances created)
```
---

## **Overwriting Class Attributes in Instances**

If an instance defines an attribute with the same name as a class attribute, the instance attribute takes precedence:
```python
class Motorbike:
    wheels = 2

    def __init__(self, power, color):
        self.power = power
        self.color = color
        self.wheels = 3  # Overwrites the class attribute in this instance

bike_a = Motorbike(125, "red")
print(bike_a.wheels)  # Output: 3 (instance-specific attribute)
print(Motorbike.wheels)  # Output: 2 (class attribute remains unchanged)
```


# Understanding Class Methods in Python

## Instance Methods vs. Class Methods

### Instance Methods
- Operate on a specific instance of a class.
- Access and modify instance attributes.
- Use `self` as the first parameter, which refers to the specific instance.

**Example**:  
Suppose we have a `Motorbike` class and want to change the horsepower for a specific motorbike.  
This would be implemented as an **instance method**, as it affects only one instance.

```python
class Motorbike:
    def __init__(self, power: int):
        self.power = power

    def change_power(self, value: int):
        self.power += value

# Example usage
bike_a = Motorbike(100)
bike_a.change_power(20)  # Changes power only for bike_a
```
---

### Class Methods
- Operate on the class itself rather than any specific instance.
- Work with **class attributes**, which are shared across all instances.
- Use `cls` as the first parameter, referring to the class.
- Declared using the `@classmethod` decorator.

**Example Use Case**:
If you want to modify a shared attribute (e.g., the number of wheels for all motorbikes), a **class method** is appropriate. This ensures the change applies to the class, not individual instances.

---

## Example: Updating a Shared Attribute with a Class Method

```python
class Motorbike:
    wheels = 2  # Class attribute, shared by all instances

    @classmethod
    def update_wheels(cls, new_wheels: int):
        if not isinstance(new_wheels, int):
            raise ValueError("Wheels need to be an integer.")
        cls.wheels = new_wheels  # Update the class attribute
```
# Example usage
Motorbike.update_wheels(3)  # Updates wheels to 3 for the entire class
print(Motorbike.wheels)  # Output: 3

# New instances reflect the updated class attribute
bike_a = Motorbike()
bike_b = Motorbike()
print(bike_a.wheels)  # Output: 3
print(bike_b.wheels)  # Output: 3

---

## Key Differences Between Instance and Class Methods

1. **Instance Methods**:
   - Use `self` to operate on the attributes of a specific instance.
   - Affect only the instance on which they are called.

2. **Class Methods**:
   - Use `cls` to operate on class attributes shared by all instances.
   - Affect the class itself, and changes are reflected in all instances.

---

## How `@classmethod` Works Internally

- When a class method is called, Python automatically passes the class (`cls`) as the first argument instead of an instance (`self`).
- `cls` refers to the class itself, allowing access to and modification of class-level data.

---

## Example: Validating and Modifying a Class Attribute

**Task**: Update the number of wheels, ensuring the value is valid.

```python
class Motorbike:
    wheels = 2

    @classmethod
    def set_new_wheels(cls, new_wheels: int):
        if not isinstance(new_wheels, int):
            raise ValueError("Wheels need to be an integer.")
        cls.wheels = new_wheels  # Update the class attribute

# Example usage
Motorbike.set_new_wheels(3)  # Update wheels to 3
print(Motorbike.wheels)  # Output: 3
```
---

## Understanding `cls` in Class Methods

1. **Reference to the Class**:
   - `cls` is a reference to the class where the method is defined.
   - It can be used to access or modify class attributes and call other class methods.

2. **Memory Identity**:
   - The identity of `cls` in a class method is the same as the class itself.

**Proof**:

```python
class Motorbike:
    wheels = 2

    @classmethod
    def show_class_identity(cls):
        print(cls)  # Print the class
        print(id(cls))  # Print the class's memory address

Motorbike.show_class_identity()
```
---

## Example: Validating Input and Updating Class Attributes

**Task**: Validate the input for wheels and update the shared class attribute.

```python
class Motorbike:
    wheels = 2  # Shared class attribute

    @classmethod
    def update_wheels(cls, new_wheels: int):
        if not isinstance(new_wheels, int):
            raise ValueError("Wheels must be an integer.")
        cls.wheels = new_wheels  # Update the class attribute

# Example usage
Motorbike.update_wheels(3)  # Valid update
print(Motorbike.wheels)  # Output: 3

try:
    Motorbike.update_wheels(3.5)  # Invalid update
except ValueError as e:
    print(e)  # Output: Wheels must be an integer.
```
---

## Recap

1. **Instance Methods**:
   - Operate on individual objects (instances).
   - Use `self`.

2. **Class Methods**:
   - Operate on the class as a whole.
   - Use `cls`.
   - Declared using the `@classmethod` decorator.

3. **When to Use**:
   - Use instance methods for per-instance logic.
   - Use class methods for class-level logic, such as modifying or validating shared attributes.
  
# Using Class Methods as Alternative Constructors

## What Are Class Methods as Constructors?

Class methods can be used as alternative constructors in Python. These methods allow you to create and initialize an instance of a class using different parameters or logic than the default constructor (`__init__`). 

The general idea is:
1. Write a class method that performs some logic.
2. Return an instance of the class using the `cls` reference.

---

## Why Use Class Methods as Constructors?

1. **Additional Initialization Options**:
   - Provide multiple ways to create and initialize instances.
   - Example: Allow creation of a person instance using either name/age or name/birth year.

2. **Encapsulation**:
   - Perform calculations or preprocessing inside the class method to simplify object creation.

3. **Flexibility**:
   - Adapt to specialized use cases, such as processing files of different types (e.g., CSV, Excel).

---

## Example 1: `Cheese` Class

### Problem:
You want to create a cheese object with a predefined "strength" using random values.

### Solution:
Use class methods to generate instances with predefined parameters.

```python
from random import randint

class Cheese:
    def __init__(self, strength: int):
        self.strength = strength

    @classmethod
    def weak_cheese(cls):
        # Random strength between 1 and 4
        return cls(randint(1, 4))

    @classmethod
    def strong_cheese(cls):
        # Random strength between 7 and 10
        return cls(randint(7, 10))

# Example usage
weak = Cheese.weak_cheese()  # Creates a cheese with random strength 1-4
strong = Cheese.strong_cheese()  # Creates a cheese with random strength 7-10

print(weak.strength)  # Example output: 3
print(strong.strength)  # Example output: 9
```
---

## Example 2: `Person` Class with Birth Year

### Problem:
You want to create a person instance using their name and birth year, and calculate their age automatically.

### Solution:
Use a class method to handle the additional logic.

```python
from datetime import datetime

class Person:
    def __init__(self, name: str, age: int):
        self.name = name.title()
        self.age = age

    @classmethod
    def from_birth_year(cls, name: str, birth_year: int):
        """Return a Person instance with age calculated from birth year."""
        current_year = datetime.now().year
        age = current_year - birth_year
        return cls(name, age)

# Example usage
john = Person("John", 30)  # Normal constructor
mary = Person.from_birth_year("Mary", 1984)  # Alternate constructor

print(john.name, john.age)  # Output: John 30
print(mary.name, mary.age)  # Output: Mary 40 (assuming current year is 2024)
```
---

## How Class Methods Work in This Context

1. **`cls` Reference**:
   - `cls` refers to the class itself.
   - Used to create a new instance of the class (`cls(...)`).

2. **Initialization Process**:
   - Class methods serve as middlemen:
     - Perform calculations or validation.
     - Call the default constructor (`__init__`) via `cls`.

---

## Key Points to Remember

- **Normal Constructor**:
  - Initializes an instance directly via `__init__`.

- **Class Method Constructor**:
  - Adds a layer of logic or preprocessing before creating an instance.
  - Returns an instance using `cls`.

- **Flexibility**:
  - Allows multiple ways to create objects.
  - Useful for cases like:
    - Creating objects from different input types (e.g., birth year, data files).
    - Encapsulating complex initialization logic.

---

## Summary

1. Class methods can act as alternative constructors, providing more ways to create and initialize instances.
2. Use the `@classmethod` decorator to define these methods.
3. `cls` is a reference to the class and allows you to return new instances of it.
4. Perfect for scenarios requiring preprocessing, validation, or multiple initialization paths.


# Understanding Class Methods & Attributes

## 1. Class Attributes: Shared State Among Instances

Class attributes are variables defined directly within a class (outside of any instance methods). They are shared across all instances of the class, unlike instance attributes which are unique to each object.

### Example of Class Attributes

```python
class Dog:
    species = "Canis familiaris"  # Class attribute
    
    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age  # Instance attribute

# Usage
dog1 = Dog("Buddy", 5)
dog2 = Dog("Lucy", 3)

print(dog1.species)  # Output: Canis familiaris
print(dog2.species)  # Output: Canis familiaris

# Modifying the class attribute
Dog.species = "Canis lupus"
print(dog1.species)  # Output: Canis lupus
print(dog2.species)  # Output: Canis lupus

# Creating an instance attribute with the same name
dog1.species = "Canis domesticus"
print(dog1.species)  # Output: Canis domesticus
print(dog2.species)  # Output: Canis lupus
```
### Key Points:
- Class attributes are shared across all instances.
- Changing a class attribute directly through the class affects all instances.
- Setting a class attribute on a specific instance creates a new instance attribute, leaving the class attribute unchanged for other instances.

---

## 2. Class Methods: Methods That Operate on the Class Itself

Class methods are bound to the class rather than its instances. They are declared using the `@classmethod` decorator and take `cls` (the class itself) as the first parameter.

### Example of Class Methods

```python
class Dog:
    species = "Canis familiaris"  # Class attribute
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    @classmethod
    def change_species(cls, new_species):
        cls.species = new_species

# Usage
Dog.change_species("Canis lupus")

dog1 = Dog("Buddy", 5)
dog2 = Dog("Lucy", 3)

print(dog1.species)  # Output: Canis lupus
print(dog2.species)  # Output: Canis lupus
```
### Key Points:
- Class methods operate on the class itself, not individual instances.
- They can access and modify class attributes.
- Useful for class-wide operations, such as updating shared data or creating factory methods.

---

## When to Use Class Methods

1. **Factory Methods**:
   - Alternate constructors that return instances of the class.
   - Example: Creating an object from a different input format (e.g., from a file or dictionary).

2. **Updating Class-Wide Data**:
   - Modify class attributes that affect all instances.

### Example: Factory Method

```python
class Employee:
    raise_percentage = 1.05  # Class attribute
    
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
    
    def apply_raise(self):
        self.salary *= self.raise_percentage
    
    @classmethod
    def set_raise_percentage(cls, amount):
        cls.raise_percentage = amount

# Usage
Employee.set_raise_percentage(1.10)

emp1 = Employee("Alice", 50000)
emp2 = Employee("Bob", 60000)

emp1.apply_raise()
emp2.apply_raise()

print(emp1.salary)  # Output: 55000.0
print(emp2.salary)  # Output: 66000.0
```
### Key Points:
- The `set_raise_percentage` class method updates the class-wide raise percentage.
- All instances reflect the updated raise percentage when the `apply_raise` method is called.

---

## Summary

- **Class Attributes**:
  - Shared across all instances.
  - Define common properties or states for the class.

- **Class Methods**:
  - Operate on the class itself, using `cls`.
  - Useful for modifying class attributes and creating alternative constructors.

### When to Choose:
- Use class methods when logic is related to the class as a whole.
- Use instance methods for actions that apply to specific instances.


# Understanding Static Methods

## What Are Static Methods?

Static methods are utility functions that are packaged inside a class but do not require access to the instance (`self`) or the class (`cls`). These methods are defined with the `@staticmethod` decorator and behave like regular functions within the class context.

### Key Characteristics:
- **No `self` or `cls` parameters**: They do not operate on an instance or class-level data.
- **Utility functions**: Provide functionality related to the class but independent of its state.
- **Less frequent usage**: Static methods are less commonly used compared to instance and class methods.

---

## Example: Basic Static Methods

```python
class MathUtils:
    @staticmethod
    def add(a, b):
        return a + b

    @staticmethod
    def multiply(a, b):
        return a * b

# Usage
result_add = MathUtils.add(3, 5)  # Output: 8
result_multiply = MathUtils.multiply(3, 5)  # Output: 15
```
### Explanation:
- **`MathUtils.add`** and **`MathUtils.multiply`** are simple utility methods packaged inside the `MathUtils` class.
- They only operate on the provided arguments (`a` and `b`) without needing any instance or class context.

---

## Example: Real-World Use Case

Static methods are particularly useful for computations or helper methods that do not depend on the instance or class.

```python
class Shape:
    def __init__(self, height, width):
        self.height = height
        self.width = width
        self.area = self.calculate_area(self.height, self.width)

    @staticmethod
    def calculate_area(height, width):
        return height * width

# Usage
rectangle = Shape(10, 4)
print(rectangle.area)  # Output: 40
```
### Explanation:
- **`calculate_area`** is a static method that calculates the area of the shape.
- It does not require access to `self` or the class (`cls`) because the calculation only depends on the provided `height` and `width`.
- The method is called during initialization to calculate the area and store it as an instance attribute.

---

## When to Use Static Methods?

1. **Utility Functions**:
   - Perform actions that are related to the class but do not rely on its instance or class attributes.
   - Example: Mathematical operations, validation checks, or conversions.

2. **Helper Methods**:
   - Provide auxiliary functionality to the class without altering its state.
   - Example: Calculating values, formatting data, or performing stateless operations.

---

## Comparing Method Types

| **Method Type**      | **Access**             | **Use Case**                                           |
|-----------------------|------------------------|-------------------------------------------------------|
| **Instance Methods**  | `self` (instance data) | Modify or operate on the state of a specific instance.|
| **Class Methods**     | `cls` (class data)    | Operate on class-level attributes or modify shared data.|
| **Static Methods**    | None                  | Perform stateless operations related to the class.    |

---

## Summary

- **Static methods**:
  - Do not require instance (`self`) or class (`cls`) references.
  - Ideal for utility or helper functions.
- Use `@staticmethod` decorator to define them.
- They provide a way to organize related functions within a class for better structure and maintainability.


## Calling Static Methods in `__init__`

In Python, you can call static methods from within the `__init__` method using three approaches: via `self`, `cls`, or directly with the class name (`ClassName`). Calling via `self` or `cls` is common since both instance and class contexts have access to static methods.

### Example of Using a Static Method in `__init__`

```python
class Employee:
    def __init__(self, name: str, pay: int):
        self.name = name
        self.pay = self.validate_pay(pay)  # Calling via self

    @staticmethod
    def validate_pay(pay: int) -> int:
        """Check if pay is valid, otherwise raise an error"""
        if pay < 0:
            raise ValueError("Pay must be a positive number.")
        return pay

# Usage
john = Employee("John", 45000)  # Works fine
print(john.pay)  # Output: 45000

jane = Employee("Jane", -100)  # Raises ValueError: Pay must be a positive number.
```
---

### Ways to Call a Static Method in `__init__`

1. **Via `self`:**
   - The most common approach.
   - `self` has access to all methods and attributes of the class, including static methods.

   ```python
   self.validate_pay(pay)
   ```

2. **Via `cls`:**
   - Works similarly to `self` but emphasizes working with the class context.
   - Less common in `__init__`.

   ```python
   cls.validate_pay(pay)
   ```

3. **Directly via the class name (`ClassName`):**
   - Explicitly shows the static method is being called independently of the instance or context.

   ```python
   Employee.validate_pay(pay)
   ```
---

### Why Can Static Methods Be Called via `self` or `cls`?

- **No Dependency on `self` or `cls`:** Static methods do not require `self` or `cls`, but since they are defined within the class, they are accessible via instances (`self`) and the class context (`cls`).
- **Readability and Consistency:** Python allows this for consistency and to avoid the need to differentiate between `self/cls` and direct class calls.

---

### When to Use Each Approach?

- **Using `self`:**
  - Best for instance-level initialization or when working with methods inside an instance context.
  - Intuitive and aligns with typical usage patterns.

- **Using `cls`:**
  - Suitable when working with class-level logic, such as in class methods, or when emphasizing the class context.

- **Using the class name (`ClassName`):**
  - Explicitly highlights that the static method is being called independently of any instance or specific context.

---

### Summary

In the `__init__` method, you can call static methods via `self`, `cls`, or the class name. Typically, `self` is the preferred choice as it aligns with common instance-level usage. The choice depends on readability and your intent for emphasizing instance, class, or explicit class method calls.



# Static Methods in Practice

In this session, we explored how to use static methods within a class. To demonstrate, we created a simple `Shape` class with methods to calculate the area and perimeter of a rectangle. Here's a step-by-step breakdown:

## The `Shape` Class

### Initializing the Class
The class takes `height` and `width` as arguments and sets up instance attributes for `area` and `perimeter`. The calculations for these attributes are delegated to static methods for clarity and reusability.

```python
class Shape:
    def __init__(self, height: int, width: int):
        self.height = height
        self.width = width
        self.area = self.calculate_area(height, width)
        self.perimeter = self.calculate_perimeter(height, width)
```
---

### Static Methods for Calculations

#### Calculating the Area
The `calculate_area` method takes `height` and `width` as inputs and returns their product.

```python
    @staticmethod
    def calculate_area(height: int, width: int) -> int:
        """A utility method to return the area."""
        return height * width
```
#### Calculating the Perimeter
The `calculate_perimeter` method computes the perimeter using the formula `2 * (height + width)`.

```python
    @staticmethod
    def calculate_perimeter(height: int, width: int) -> int:
        """A utility method to return the perimeter."""
        return 2 * height + 2 * width
```
---

## Example Usage

We create an instance of the `Shape` class and verify the calculations for the area and perimeter:

```python
rectangle = Shape(height=10, width=5)

# Accessing attributes
print(vars(rectangle))  
# Output: {'height': 10, 'width': 5, 'area': 50, 'perimeter': 30}
```
---

## Key Takeaways

1. **Static Methods:**
   - Declared with the `@staticmethod` decorator.
   - Do not receive `self` or `cls` as their first parameter.
   - Operate independently of any instance or class-level attributes.

2. **Responsibilities of `__init__`:**
   - The `__init__` method should focus solely on setting up attributes.
   - Delegating calculations to static methods helps maintain clean, modular, and reusable code.

3. **Benefits of Static Methods:**
   - Simplify logic by isolating specific operations.
   - Easy to test and maintain.
   - Improve readability by keeping responsibilities separate.

---

### Why Use Static Methods Here?

While the calculations for area and perimeter could have been done directly in `__init__`, using static methods:
- Avoids cluttering the initialization logic.
- Promotes code reuse (e.g., these methods can be used elsewhere without needing an instance).
- Makes the class easier to extend, test, and maintain.

---

### Next Steps

In the following session, you'll create a new class with two static methods to further practice these concepts. The goal is to solidify your understanding of when and how to use static methods effectively.


# Static Methods in Practice: Email and User ID Construction

In this session, we explored how static methods can be used to generate attributes like email and user ID dynamically during object initialization. Below is a step-by-step explanation and example.

---

## Employee Class with Static Methods

### Class Overview

The `Employee` class includes:
1. **Instance attributes**: `f_name` (first name), `l_name` (last name), `email`, and `user_id`.
2. **Static methods**: 
   - `construct_email` to generate an email address.
   - `construct_user_id` to create a user ID.

### Code Implementation

```python
from random import randint

class Employee:
    def __init__(self, f_name: str, l_name: str):
        self.f_name = f_name.title()
        self.l_name = l_name.title()
        self.email = self.construct_email(self.f_name, self.l_name)
        self.user_id = self.construct_user_id(self.l_name)
    
    @staticmethod
    def construct_email(f_name: str, l_name: str) -> str:
        """Constructs an email in the format: firstname.lastname@gmail.com"""
        return f"{f_name.lower()}.{l_name.lower()}@gmail.com"
    
    @staticmethod
    def construct_user_id(l_name: str) -> str:
        """Constructs a user ID as: a random 3-digit number + last name."""
        return f"{randint(100, 999)}{l_name}"
```
---

## Task 1: Email Construction

- **Objective**: Automatically generate an email address during initialization.
- **Logic**: Use the first name and last name to create an email in the format `firstname.lastname@gmail.com`.

Example:

```python
employee = Employee("John", "Smith")
print(employee.email)  
# Output: john.smith@gmail.com
```
---

## Task 2: User ID Construction

- **Objective**: Generate a user ID dynamically as a random 3-digit number followed by the last name.
- **Logic**: Use the `randint` function to generate the random number and concatenate it with the last name.

Example:

```python
print(employee.user_id)  
# Output: (random) e.g., 237Smith
```
---

## Benefits of Using Static Methods

1. **Modularity**: By delegating the logic to static methods, the `__init__` method remains clean and focused solely on setting up the object.
2. **Reusability**: The logic for constructing email and user ID is encapsulated in their respective static methods, making them reusable outside the class context if needed.
3. **Maintainability**: Changes to the logic for email or user ID generation can be made in one place, ensuring consistency and simplifying updates.
4. **Encapsulation**: Keeps the initialization logic clean by separating more complex logic into independent methods.

---

## Why Not Compute Directly in `__init__`?

Including too much logic in `__init__` can:
- Make the initialization process harder to read and maintain.
- Couple unrelated operations together, making the code less modular.
- Increase the risk of introducing errors when making changes to the initialization logic.

Using static methods promotes clean, testable, and maintainable code.

---

## Recap

- The `construct_email` static method generates an email using first and last names.
- The `construct_user_id` static method generates a unique ID using a random 3-digit number and the last name.
- These static methods simplify the initialization process, making the class cleaner and more maintainable.

### Example Output

```python
employee = Employee("Alice", "Johnson")
print(vars(employee))  
# Output: {'f_name': 'Alice', 'l_name': 'Johnson', 'email': 'alice.johnson@gmail.com', 'user_id': '834Johnson'}
```

# Understanding Static Methods in Python

## Introduction

In Python's object-oriented programming (OOP) paradigm, static methods are a special type of method defined within a class but do not require access to the class or its instances. Unlike:
- **Instance methods**, which operate on an instance of a class,
- **Class methods**, which operate on the class itself,

**Static methods** perform functions logically related to the class but do not access or modify class-specific or instance-specific data.

---

## 1. Defining Static Methods

To define a static method, use the `@staticmethod` decorator. Static methods do not receive an implicit first argument (`self` or `cls`).

Example:
```python
class MathOperations:
    @staticmethod
    def add(x, y):
        return x + y
 
    @staticmethod
    def subtract(x, y):
        return x - y
```

In this example:
- `add` and `subtract` are static methods.
- They perform simple arithmetic operations and return the result.

---

## 2. How Static Methods Work

Static methods are similar to regular functions but belong to the class's namespace. They cannot access or modify instance (`self`) or class (`cls`) data.

### Calling Static Methods

You can call static methods on the class or an instance:

# Calling the static method on the class
result = MathOperations.add(5, 3)
print(result)  # Output: 8
 
# Calling the static method on an instance of the class
math_ops = MathOperations()
result = math_ops.subtract(10, 4)
print(result)  # Output: 6

In both cases, the functionality is the same as static methods do not depend on the class or instance state.

---

## 3. When to Use Static Methods

Static methods are used when a method's functionality is logically related to the class but does not require access to the class or instance data. They are ideal for:

- **Utility functions**: Helper functions that perform tasks related to the class without modifying its state.
- **Code organization**: Keeping related functions within the class context improves organization and readability.

Example:
```pathon
class Geometry:
    @staticmethod
    def area_of_circle(radius):
        return 3.14159 * radius * radius
 
    @staticmethod
    def area_of_rectangle(length, width):
        return length * width
```
These static methods calculate areas without requiring access to the class or instance attributes.

# Usage
circle_area = Geometry.area_of_circle(5)
print(circle_area)  # Output: 78.53975
 
rectangle_area = Geometry.area_of_rectangle(4, 6)
print(rectangle_area)  # Output: 24

---

## 4. Static Methods vs. Class Methods vs. Instance Methods

Understanding their differences helps decide which method type to use:

- **Instance Methods**:
  - Take `self` as the first parameter.
  - Can access and modify instance attributes.

- **Class Methods**:
  - Defined with the `@classmethod` decorator.
  - Take `cls` as the first parameter.
  - Can access and modify class attributes.

- **Static Methods**:
  - Defined with the `@staticmethod` decorator.
  - Do not take `self` or `cls` as the first parameter.
  - Cannot modify class or instance attributes.

---

## 5. Benefits of Using Static Methods

1. **Encapsulation**: Encapsulate utility functions within the class for better organization and readability.
2. **Reusability**: Reuse across different parts of the code without depending on class or instance data.
3. **Maintenance**: Independent from class or instance state, making them easier to maintain and less prone to bugs.

---

## 6. Practical Use Cases

### 1. **Validation**

Static methods are useful for validation tasks related to the class but independent of its state.

Example:
```python
class Validator:
    @staticmethod
    def is_valid_email(email):
        return "@" in email and "." in email

email = "test@example.com"
print(Validator.is_valid_email(email))  # Output: True
```
---

### 2. **Factory Functions**

Static methods can be used for factory functions when the factory does not require access to class attributes.
```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
 
    @staticmethod
    def from_tuple(tup):
        return Point(tup[0], tup[1])

# Usage
point = Point.from_tuple((10, 20))
print(point.x, point.y)  # Output: 10 20
```
---

## 7. Conclusion

Static methods in Python provide a flexible and clean way to encapsulate utility functions within a class context. By understanding their use cases, you can:
- Enhance code organization and readability.
- Reduce dependence on class or instance state.
- Write maintainable and reusable code.

Static methods are a powerful tool in Python's OOP toolkit, enabling logical grouping of functions that don't interact with class or instance data.

# Magic Methods in Python

Magic methods, also known as **special methods** or **dunder methods** (short for "double underscore"), play a vital role in Python. These methods are defined within classes and are called implicitly by various Python functions and operators, allowing everyday Python tasks to work seamlessly.

## Introduction

Magic methods are characterized by their syntax: __method__. They are an integral part of Python, enabling behind-the-scenes functionality for operations such as:

- Printing
- Comparing values
- Iterating
- Using built-in functions like len or dir

---

## Exploring Magic Methods with dir

The dir function is a useful tool to inspect the methods and attributes of a class. For example:

```python
dir(list)
```
This displays a list of methods and attributes belonging to the list class. Among the output, you will see familiar methods like append, clear, and copy. However, the majority of the output includes methods with double underscores, such as:

- __add__
- __len__
- __iter__
- __eq__

These are the **magic methods**.

---

## Purpose of Magic Methods

The main purpose of magic methods is to provide behind-the-scenes functionality for Python's built-in operations. Examples include:

- **Printing**: Calling print invokes the __str__ or __repr__ method.
- **Comparing**: Using <, >, ==, etc., invokes methods like __lt__, __gt__, and __eq__.
- **Iterating**: Loops rely on the __iter__ and __next__ methods.
- **Calculating length**: The len function calls the __len__ method.

### Example: len

When you call len on an object:

```python
len(my_list)
```
Python internally calls the __len__ method of the object. The len function is essentially an interface that checks if the object has a __len__ method and then executes it to return the length.

---

## Magic Methods in Everyday Tasks

Here are some common Python tasks and their corresponding magic methods:

- **Printing**: Uses __str__ or __repr__.
- **Comparison**: Relies on methods like __eq__, __lt__, and __gt__.
- **Length**: Calls __len__.
- **Addition**: Invokes __add__.
- **Subtraction**: Uses __sub__.

For example, adding two objects with + calls the __add__ method:

```python
"hello" + "world"  # Invokes __add__ for strings
1 + 2              # Invokes __add__ for integers
```
The behavior of __add__ is defined differently in classes like str, int, and list to handle operations like concatenation, numerical addition, or joining.

---

## Systematic Approach to Magic Methods

Throughout this section, we will systematically explore various categories of magic methods:

1. **Comparison methods**: Methods like __eq__, __lt__, and __gt__.
2. **String representation methods**: Methods like __str__ and __repr__ for printing.
3. **Common everyday functions**: Methods like __len__ and __add__.
4. **Advanced topics**: Iteration (__iter__, __next__) and context management (__enter__, __exit__).

This structured approach will ensure a comprehensive understanding of magic methods.


# Understanding Dunder Methods: __str__ and __repr__

Dunder methods, such as __str__ and __repr__, are essential tools in Python for customizing the behavior of your classes and objects. In this section, we'll explore how these methods work and why they are so useful.

## Why and How __str__ Simplifies Object Usage

1. **Facilitating Object Usage**:
   - Dunder methods enable intuitive use of objects with standard functions, like `print()` or `len()`, without needing to call methods explicitly (e.g., `instance.__str__()`).
   
2. **Customizing Behavior**:
   - The __str__ method provides a human-readable description of an object.
   - The __repr__ method gives a technical or unambiguous representation, often used for debugging.

3. **Automatic Invocation by Python**:
   - When `print(instance)` is called, Python automatically looks for the __str__ method.
   - If __str__ is not defined, it defaults to __repr__ or the base class implementation.

4. **Instance vs. Class Behavior**:
   - Calling `print(instance)` uses the __str__ method defined at the instance level.
   - Calling `print(ClassName)` uses methods defined at the class level (e.g., with `@classmethod`).

5. **Simplifying Readability**:
   - Dunder methods abstract complex behavior, allowing developers to use concise and readable syntax.

These methods ensure objects are intuitive and natural to use with standard Python functions and operators.

---

## Example: Using __str__ and __repr__ in a Custom Class

Let's take a `Ship` class and demonstrate how dunder methods influence the output when printing instances.

### Default Behavior of __str__ and __repr__

When you create a class and do not define __str__ or __repr__, Python provides default implementations inherited from the base `object` class.

```python
class Ship:
    def __init__(self, crew, length):
        self.crew = crew
        self.length = length

ship = Ship(5, 45)
print(ship)

Output:
<__main__.Ship object at 0x10c2e90d0>
```
Explanation:
- The default __repr__ implementation prints the class name and memory address of the instance.

---

### Defining __str__ and __repr__

We can define custom implementations of __str__ and __repr__ to improve readability.

```python
class Ship:
    def __init__(self, crew, length):
        self.crew = crew
        self.length = length

    def __str__(self):
        return f"Crew: {self.crew}, Length: {self.length}"

    def __repr__(self):
        return f"Ship({self.crew}, {self.length})"

ship = Ship(5, 45)
print(ship)
```
Output:
Crew: 5, Length: 45

Explanation:
- The __str__ method provides a human-readable string.
- If __str__ is absent, Python falls back to __repr__.

---

### Comparing __str__ and __repr__

The primary difference lies in their use cases:
1. **__str__**:
   - Designed for end-users, producing readable and descriptive output.
   - Used when calling `print(instance)`.

2. **__repr__**:
   - Designed for developers, often more concise and technical.
   - Used for debugging or when objects are in collections (e.g., lists).

```python
ships = [Ship(5, 45), Ship(4, 40)]
print(ships)
```
Output:
[Ship(5, 45), Ship(4, 40)]

Explanation:
- When printing a collection containing objects, Python uses the __repr__ method of each object.

---

## Practice and Insights

To fully understand __str__ and __repr__, try the following:
1. Create a class and define both methods.
2. Experiment with `print()` to observe the output of __str__.
3. Comment out __str__ and see how Python falls back to __repr__.
4. Print collections (e.g., lists or tuples) containing your objects and observe the difference.

Remember:
- If neither __str__ nor __repr__ is defined, Python defaults to the base implementation that includes the memory address.
- When both are defined, Python prioritizes __str__ for printing and __repr__ for representations in collections.

With these methods, you can make your objects intuitive and informative for both users and developers!

# Understanding Comparison Operators with Dunder Methods

In this session, we will explore how comparison operators (e.g., `==`, `<`, `>`) work behind the scenes in Python. Just like with `__str__` and `__repr__`, comparison operators rely on dunder methods to provide functionality.

## How Python Handles Comparison Operators

1. **Dunder Methods for Comparison**:
   - Python uses special dunder methods for comparison operations. For instance:
     - `==` invokes `__eq__`
     - `>` invokes `__gt__`
     - `<` invokes `__lt__`
   - These methods allow us to define custom logic for comparing objects.

2. **Default Behavior**:
   - If dunder methods are not defined, Python compares objects by their identity (memory address).
   - For example, two objects are considered equal (`==`) only if they are the same instance.

---

## Example: Custom Comparison with a `House` Class

Let’s consider a `House` class that has a single attribute, `bedrooms`. We'll define custom dunder methods for equality and comparison.

### Initial Class Definition

```python
class House:
    def __init__(self, bedrooms):
        self.bedrooms = bedrooms

house_a = House(4)
house_b = House(2)

print(house_a == house_b)  # Output: False
```
### Adding `__eq__` for Equality

```python
class House:
    def __init__(self, bedrooms):
        self.bedrooms = bedrooms

    def __eq__(self, other):
        if not isinstance(other, House):
            return NotImplemented
        return self.bedrooms == other.bedrooms

house_a = House(4)
house_b = House(4)

print(house_a == house_b)  # Output: True
```
Explanation:
- `__eq__` is called when `house_a == house_b` is evaluated.
- It compares the `bedrooms` attributes of the two `House` objects.

---

### Adding `__gt__` and `__lt__` for Greater and Less Than

```python
class House:
    def __init__(self, bedrooms):
        self.bedrooms = bedrooms

    def __eq__(self, other):
        if not isinstance(other, House):
            return NotImplemented
        return self.bedrooms == other.bedrooms

    def __gt__(self, other):
        if not isinstance(other, House):
            return NotImplemented
        return self.bedrooms > other.bedrooms

    def __lt__(self, other):
        if not isinstance(other, House):
            return NotImplemented
        return self.bedrooms < other.bedrooms

house_a = House(4)
house_b = House(2)

print(house_a > house_b)  # Output: True
print(house_a < house_b)  # Output: False
```
---

## Sorting with Dunder Methods

Python's sorting functions rely on the `__lt__` method to determine the order of objects.

```python
houses = [House(4), House(2), House(6)]

# Sort the list
houses.sort()

# Add __repr__ to display the sorted list
class House:
    def __init__(self, bedrooms):
        self.bedrooms = bedrooms

    def __repr__(self):
        return f"House({self.bedrooms})"

    # Previous methods...

print(houses)  # Output: [House(2), House(4), House(6)]
```
---

## Handling Incompatible Comparisons

To handle comparisons with incompatible types (e.g., comparing a `House` object with an integer), it’s good practice to raise an appropriate error or return `NotImplemented`.

```python
def __eq__(self, other):
    if not isinstance(other, House):
        raise ValueError("Can only compare House objects")
    return self.bedrooms == other.bedrooms
```
---

## Key Takeaways

1. **Dunder Methods**:
   - `__eq__`, `__gt__`, and `__lt__` are critical for custom object comparisons.
   - These methods allow you to define how objects are compared using operators.

2. **Default Behavior**:
   - Without these methods, Python defaults to comparing memory addresses.

3. **Practical Applications**:
   - Custom dunder methods are essential for tasks like sorting and filtering collections of objects.

4. **Error Handling**:
   - Implement proper error handling to avoid issues when comparing incompatible types.

To deepen your understanding, try implementing the other comparison operators (`!=`, `>=`, `<=`) and observe their behavior.


# Understanding `len()` and the Addition Operator with Dunder Methods

In this session, we'll explore how the `len()` function and the `+` operator work through their corresponding dunder methods, `__len__` and `__add__`. These two methods offer unique ways to customize behavior for objects in Python.

---

## How `len()` Works Behind the Scenes

The `len()` function calls the `__len__` method of an object. If the method is not defined in your class, Python raises an error. Let’s see this in action with an example.

### Example: Adding `__len__` to a Class

#### Initial Class Definition

```python
class Plane:
    def __init__(self, seats, length):
        self.seats = seats
        self.length = length

plane = Plane(240, 60)
print(len(plane))  # Output: TypeError: object of type 'Plane' has no len()
```
#### Adding the `__len__` Method

```python
class Plane:
    def __init__(self, seats, length):
        self.seats = seats
        self.length = length

    def __len__(self):
        return self.length

plane = Plane(240, 60)
print(len(plane))  # Output: 60
```
Explanation:
- The `len()` function checks for the `__len__` method in the class.
- If the method exists, its return value is used as the output of `len()`.

---

## Customizing the Addition Operator

The `+` operator relies on the `__add__` method. By defining `__add__`, we can customize how two objects are added together.

### Example: Adding `__add__` to a Class

#### Initial Class Definition

```python
class Shape:
    def __init__(self, height, width):
        self.height = height
        self.width = width

a = Shape(10, 3)
b = Shape(8, 2)

c = a + b  # Output: TypeError: unsupported operand type(s) for +: 'Shape' and 'Shape'
```
#### Adding the `__add__` Method

```python
class Shape:
    def __init__(self, height, width):
        self.height = height
        self.width = width

    def __add__(self, other):
        if not isinstance(other, Shape):
            raise ValueError("Can only add Shape objects")
        combined_height = self.height + other.height
        combined_width = self.width + other.width
        return Shape(combined_height, combined_width)

a = Shape(10, 3)
b = Shape(8, 2)

c = a + b
print(vars(c))  # Output: {'height': 18, 'width': 5}
```
Explanation:
- The `__add__` method is called when `+` is used.
- It combines the `height` and `width` of two `Shape` objects into a new `Shape`.

---

## Practical Applications

### Sorting Objects Using `len()`

The `__len__` method can make objects compatible with sorting based on their "length."

```python
planes = [Plane(240, 60), Plane(300, 70)]
planes.sort(key=len)
print([len(plane) for plane in planes])  # Output: [60, 70]
```
### Combining Objects with `+`

You can use `__add__` to implement logic for combining attributes or properties of objects.

```python
combined_shape = a + b
print(f"Height: {combined_shape.height}, Width: {combined_shape.width}")  # Output: Height: 18, Width: 5
```
---

## Error Handling for Incompatible Types

To prevent errors when adding incompatible objects, include a type check in `__add__`.

```python
def __add__(self, other):
    if not isinstance(other, Shape):
        raise ValueError("Can only add Shape objects")
    return Shape(self.height + other.height, self.width + other.width)
```
---

## Key Takeaways

1. **`len()` Function**:
   - Calls the `__len__` method to determine the "length" of an object.
   - You can define `__len__` to return any value representing the "length" of your object.

2. **Addition Operator (`+`)**:
   - Relies on the `__add__` method to combine two objects.
   - You can define `__add__` to create new objects or perform custom operations.

3. **Customization**:
   - Both `__len__` and `__add__` allow you to tailor object behavior for specific use cases.
   - Proper type checks and error handling ensure robustness.

With these methods, you can make your classes more intuitive and functional by seamlessly integrating them with Python's built-in functions and operators.

# Implementing Iteration with Dunder Methods

In this session, we’ll explore how to implement iteration in Python by using the `__iter__` and `__next__` dunder methods. These methods allow us to define custom behavior when iterating over objects of a class.

---

## Why Is Iteration Important?

Iteration is a core feature of Python, enabling constructs like `for` loops to work seamlessly with different data structures. However, a class must be made iterable for this functionality to work. By default, classes are not iterable unless they explicitly define the required dunder methods.

---

## Example: Creating an Iterable Class

### Initial Class Definition

We’ll create a `Store` class with an attribute `items`, which is a list of strings. Initially, attempting to iterate over the class instance will result in an error.

```python
class Store:
    def __init__(self, items):
        self.items = items

my_store = Store(["cheese", "ham", "milk"])

for item in my_store:
    print(item)  # Output: TypeError: 'Store' object is not iterable
```
---

### Adding `__iter__` and `__next__` Methods

To make the class iterable, we need to define the `__iter__` and `__next__` methods.

```python
class Store:
    def __init__(self, items):
        self.items = items

    def __iter__(self):
        self.counter = 0  # Initialize a counter for tracking iteration
        return self  # Return the iterator object (self)

    def __next__(self):
        if self.counter >= len(self.items):
            raise StopIteration  # Stop iteration when the end is reached
        current = self.items[self.counter]
        self.counter += 1  # Increment the counter
        return current

my_store = Store(["cheese", "ham", "milk"])

for item in my_store:
    print(item)
```
Output:
cheese  
ham  
milk

---

## How It Works

1. **`__iter__`**:
   - This method is called when iteration starts (e.g., in a `for` loop).
   - It initializes any required variables (e.g., a counter) and returns the iterator object (usually `self`).

2. **`__next__`**:
   - This method is called repeatedly to get the next item in the sequence.
   - If there are no more items, it raises a `StopIteration` exception to signal the end of the iteration.

---

## Step-by-Step Breakdown

### Iteration Logic

1. The `__iter__` method initializes the counter to `0` and returns `self` as the iterator.
2. The `__next__` method:
   - Checks if the counter has reached or exceeded the length of `items`. If yes, it raises `StopIteration`.
   - Otherwise, it retrieves the current item, increments the counter, and returns the item.

### Key Insights

- The `StopIteration` exception gracefully ends the loop.
- The counter ensures the iteration progresses and does not loop indefinitely.

---

## Debugging the Process

To better understand what happens during iteration, we can print the value of the counter at each step:

```python
def __next__(self):
    print(f"Counter: {self.counter}")  # Debugging output
    if self.counter >= len(self.items):
        raise StopIteration
    current = self.items[self.counter]
    self.counter += 1
    return current
```
Output during iteration:
Counter: 0  
Counter: 1  
Counter: 2  

---

## Example with a Custom Use Case

Here’s an example where we iterate over a class but filter out certain items:

```python
class FilteredStore:
    def __init__(self, items, skip_item):
        self.items = items
        self.skip_item = skip_item

    def __iter__(self):
        self.counter = 0
        return self

    def __next__(self):
        while self.counter < len(self.items):
            current = self.items[self.counter]
            self.counter += 1
            if current != self.skip_item:
                return current
        raise StopIteration

my_store = FilteredStore(["cheese", "ham", "milk"], "ham")

for item in my_store:
    print(item)
```
Output:
cheese  
milk

---

## Key Takeaways

1. **Required Methods**:
   - `__iter__`: Prepares the object for iteration.
   - `__next__`: Returns the next item or raises `StopIteration`.

2. **Practical Applications**:
   - Use iteration to traverse custom collections.
   - Add logic (e.g., filtering) to enhance the iteration process.

3. **Best Practices**:
   - Ensure the `StopIteration` exception is raised at the correct point to avoid infinite loops.
   - Use a counter or similar mechanism to track the current position in the sequence.

With this knowledge, you can implement custom iteration for any Python class, tailoring it to suit specific needs.

# Implementing Context Management with Dunder Methods

In this session, we’ll learn how to implement context management in custom classes using the `__enter__` and `__exit__` dunder methods. These methods allow classes to work seamlessly with Python's `with` statement, which ensures resources are properly managed and cleaned up.

---

## What Is Context Management?

Context management refers to the structured handling of resources, such as files or database connections, ensuring they are properly acquired and released. A classic example is working with files:

```python
with open("file.txt", "w") as file:
    file.write("Hello, world!")
```
Explanation:
1. The `with` statement opens the file.
2. The indented block is the **context**.
3. When the block ends, the file is automatically closed.

This behavior is enabled by the `__enter__` and `__exit__` methods:
- `__enter__`: Called at the start of the `with` block.
- `__exit__`: Called when the block exits, regardless of success or error.

---

## Implementing Context Management in a Custom Class

We’ll create a `TextFileManager` class to handle opening and closing a file.

### Initial Class Definition

```python
class TextFileManager:
    def __init__(self, file_name, mode="a"):
        self.file_name = self._validate_file_name(file_name)
        self.mode = mode
        self.file = None

    @staticmethod
    def _validate_file_name(file_name):
        if not isinstance(file_name, str):
            return "default.txt"
        if not file_name.endswith(".txt"):
            return f"{file_name}.txt"
        return file_name
```
---

### Adding `__enter__` and `__exit__`

1. **`__enter__`**: Opens the file and returns it.
2. **`__exit__`**: Closes the file and optionally handles exceptions.

```python
class TextFileManager:
    # Previous methods...

    def __enter__(self):
        self.file = open(self.file_name, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_value, traceback):
        if self.file:
            self.file.close()
        if exc_type:
            print(f"An error was raised: {exc_type} - {exc_value}")
            return False  # Propagate the error
        return True  # Exit cleanly if no error
```
---

### Using the Class

```python
with TextFileManager("example") as file:
    file.write("Hello, world!")

print("File closed automatically!")
```
Explanation:
- The `__enter__` method opens `example.txt` for writing.
- The `__exit__` method ensures the file is closed after the block, even if an error occurs.

Output:
- Creates `example.txt` containing "Hello, world!".
- Prints `File closed automatically!`.

---

### Handling Exceptions in `__exit__`

The `__exit__` method can catch and handle exceptions raised in the `with` block. For example:

```python
with TextFileManager("example") as file:
    file.write("Hello")
    raise ValueError("Something went wrong!")  # Intentional error
```
Output:
An error was raised: <class 'ValueError'> - Something went wrong!  
File is closed automatically.

Explanation:
- `__exit__` receives the exception type, value, and traceback.
- It handles the exception gracefully, ensuring the file is closed.

---

## Key Features of Context Management

1. **Automatic Cleanup**:
   - Resources like files or connections are automatically released after the block.

2. **Error Handling**:
   - Exceptions raised in the block are passed to `__exit__`.

3. **Customizable Behavior**:
   - Use `__enter__` to initialize resources and `__exit__` to clean up or handle errors.

---

## Advanced Example: Custom Modes and Error Logging

Enhance the `TextFileManager` to support custom modes and log errors to a separate file.

```python
class TextFileManager:
    def __init__(self, file_name, mode="a"):
        self.file_name = self._validate_file_name(file_name)
        self.mode = mode
        self.file = None

    @staticmethod
    def _validate_file_name(file_name):
        if not isinstance(file_name, str):
            return "default.txt"
        if not file_name.endswith(".txt"):
            return f"{file_name}.txt"
        return file_name

    def __enter__(self):
        self.file = open(self.file_name, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_value, traceback):
        if self.file:
            self.file.close()
        if exc_type:
            with open("error.log", "a") as log_file:
                log_file.write(f"Error: {exc_type} - {exc_value}\n")
            return False
        return True

# Using the class
with TextFileManager("logfile") as file:
    file.write("Logging some data\n")
    raise RuntimeError("Oops!")
```
Output:
- `logfile.txt` contains "Logging some data".
- `error.log` logs the error details.

---

## Key Takeaways

1. **Dunder Methods**:
   - `__enter__`: Initializes the context.
   - `__exit__`: Cleans up and optionally handles errors.

2. **Exception Handling**:
   - Use `exc_type`, `exc_value`, and `traceback` to process errors.
   - Decide whether to propagate or suppress errors by returning `False` or `True`.

3. **Practical Uses**:
   - File management.
   - Database transactions.
   - Network connections.

By implementing context management, you can simplify resource handling and make your classes more robust and Pythonic.


# Implementing `__getitem__` and `__setitem__` in Python

In this session, we explore how to implement the `__getitem__` and `__setitem__` dunder methods in a custom class. These methods allow instances of your class to mimic dictionary-like behavior, enabling operations such as key-based retrieval and assignment.

---

## Understanding `__getitem__` and `__setitem__`

### `__getitem__(self, key)`
- Enables the use of square bracket notation (`obj[key]`) to retrieve values.
- Called when an attempt is made to access an item using a key.

### `__setitem__(self, key, value)`
- Enables the use of square bracket notation (`obj[key] = value`) to set or modify values.
- Called when assigning a value to a key.

---

## Example: Creating a Class with Dictionary-Like Behavior

We will create an `Employee` class that allows:
1. Accessing attributes using square brackets.
2. Modifying existing attributes or adding new ones.

---

### Initial Class Definition

```python
class Employee:
    company = "Apple"  # Class attribute

    def __init__(self, name, age):
        self._data = {"name": name, "age": age, "company": Employee.company}

john = Employee("John", 35)
print(john._data)
```
Output:
{'name': 'John', 'age': 35, 'company': 'Apple'}

Explanation:
- `_data` is a dictionary storing the attributes of the employee.
- By convention, attributes prefixed with an underscore (e.g., `_data`) are considered private and should not be accessed directly outside the class.

---

### Implementing `__getitem__`

We implement `__getitem__` to retrieve values using square brackets.

```python
class Employee:
    # Previous methods...

    def __getitem__(self, key):
        if key in self._data:
            return self._data[key]
        raise KeyError(f"'{key}' does not exist")

# Example Usage
john = Employee("John", 35)
print(john["name"])  # Output: John
print(john["age"])   # Output: 35

# Accessing a non-existent key
print(john["role"])  # Raises KeyError: 'role' does not exist
```
Explanation:
- The `__getitem__` method checks if the key exists in `_data` and returns the associated value.
- If the key does not exist, a `KeyError` is raised.

---

### Implementing `__setitem__`

We implement `__setitem__` to allow setting or modifying attributes using square brackets.

```python
class Employee:
    # Previous methods...

    def __setitem__(self, key, value):
        if key == "age" and not isinstance(value, int):
            raise TypeError("Age must be an integer")
        self._data[key] = value

# Example Usage
john = Employee("John", 35)

# Adding a new key-value pair
john["role"] = "IT"
print(john._data)  # Output: {'name': 'John', 'age': 35, 'company': 'Apple', 'role': 'IT'}

# Modifying an existing value
john["age"] = 40
print(john._data)  # Output: {'name': 'John', 'age': 40, 'company': 'Apple', 'role': 'IT'}

# Setting an invalid age
john["age"] = "thirty"  # Raises TypeError: Age must be an integer
```
Explanation:
- The `__setitem__` method validates the `key` and `value` before updating the `_data` dictionary.
- Specific validation for `age` ensures it is always an integer.

---

## Summary

1. **`__getitem__`**:
   - Enables dictionary-like access (`obj[key]`).
   - Validates and retrieves the value associated with the key.

2. **`__setitem__`**:
   - Enables dictionary-like assignment (`obj[key] = value`).
   - Performs validation and updates or adds new key-value pairs.

3. **Dictionary-Like Behavior**:
   - These methods allow custom classes to mimic the behavior of dictionaries, providing both flexibility and readability.

By implementing `__getitem__` and `__setitem__`, you can create powerful, intuitive classes tailored to your specific needs.

# Understanding `@property`, `@setter`, and `@deleter`

## 1. Summary of Key Principles

### What is `@property`?
The `@property` decorator allows you to access a method in a class as if it were a simple attribute. This is especially useful when:
- **Protecting internal attributes**: Users interact with the property rather than directly modifying the internal attribute.
- **Dynamic content**: You can calculate, transform, or validate values dynamically.

---

### What are `@setter` and `@deleter`?
- **`@setter`**: Allows setting a value for a property with additional logic, such as validation or transformation, before storing it in an internal attribute.
- **`@deleter`**: Allows deleting or resetting a property. Typically resets an internal attribute to a default value or `None`.

---

## 2. How They Work Together

### Table: Usage of `@property`, `@setter`, and `@deleter`

| Decorator       | Usage             | Action                                      | Example                          |
|------------------|-------------------|---------------------------------------------|----------------------------------|
| `@property`      | Uses `return`     | Returns the value of an internal attribute. | `return self._attribute`        |
| `@property.setter` | Uses assignment  | Sets a new value for an internal attribute. | `self._attribute = value`       |
| `@property.deleter`| Uses assignment  | Deletes or resets the value.               | `self._attribute = None`        |

---

## 3. The Role of Internal Attributes (e.g., `_age`)

Internal attributes (e.g., `_age`) separate property logic (getter, setter, deleter) from data storage:
- **Getter (`@property`)** reads the value of `_age`.
- **Setter (`@property.setter`)** validates and assigns a new value to `_age`.
- **Deleter (`@property.deleter`)** resets `_age` to a default value or `None`.

Using internal attributes prevents infinite loops when accessing or setting properties.

---

## 4. Avoiding Infinite Loops

### How Does an Infinite Loop Happen?

If a getter, setter, or deleter accidentally calls the property instead of the internal attribute, the property will keep calling itself, leading to a `RecursionError`.

#### Example of a Faulty Getter
```python
class Person:
    def __init__(self, age):
        self._age = age

    @property
    def age(self):
        return self.age  # WRONG: Calls the property `age` again.

- **What Happens?**
  - `person.age` triggers the getter.
  - The getter calls `self.age` again, repeating infinitely.
```
#### Fix:
```python
class Person:
    def __init__(self, age):
        self._age = age

    @property
    def age(self):
        return self._age  # Correctly accesses the internal attribute `_age`.
```
---

### Faulty Setter Example
```python
@age.setter
def age(self, value):
    self.age = value  # WRONG: Calls the setter `age` again.
```
- **What Happens?**
  - `person.age = 25` triggers the setter.
  - The setter calls `self.age = value`, leading to infinite recursion.

#### Fix:
```python
@age.setter
def age(self, value):
    self._age = value  # Correctly sets the internal attribute `_age`.
```
---

## 5. Comprehensive Example

### Class Example with Getter, Setter, and Deleter

```python
class Climber:
    default_grade = "v1"

    def __init__(self, fname: str, lname: str, max_grade: str) -> None:
        self._fname = fname
        self._lname = lname
        self._max_grade = max_grade

    @property
    def fname(self):
        return self._fname.capitalize()  # Returns the capitalized first name.

    @property
    def lname(self):
        return self._lname.capitalize()  # Returns the capitalized last name.

    @property
    def max_grade(self):
        return self._max_grade  # Reads the internal `_max_grade` attribute.

    @max_grade.setter
    def max_grade(self, new_grade: str):
        # Validates the new value.
        if not new_grade.startswith("v"):
            raise ValueError("Grade must start with 'v'.")
        if len(new_grade) > 2:
            raise ValueError("Grade must have only two characters.")
        self._max_grade = new_grade  # Sets the new value.

    @max_grade.deleter
    def max_grade(self):
        self._max_grade = self.default_grade  # Resets to the default value.
```
---

### Usage
```python
climber = Climber("john", "doe", "v5")

# Getter calls `@property`.
print(climber.fname)  # "John"
print(climber.lname)  # "Doe"
print(climber.max_grade)  # "v5"

# Setter calls `@max_grade.setter`.
climber.max_grade = "v6"
print(climber.max_grade)  # "v6"

# Deleter calls `@max_grade.deleter`.
del climber.max_grade
print(climber.max_grade)  # "v1"

# Invalid value raises an error.
climber.max_grade = "b7"  # ValueError: Grade must start with 'v'.
```
---

## 6. Summary of Infinite Loops

- **In Getter**: Using `self.age` instead of `self._age` calls the property repeatedly.
- **In Setter**: Using `self.age = value` instead of `self._age = value` calls the setter repeatedly.
- **Solution**: Always use internal attributes (e.g., `_age`) in getter, setter, and deleter logic.


# Differences Between `@property` and `@classmethod`

When working with Python classes, both `@property` and `@classmethod` provide mechanisms to manage attributes and methods in a structured and Pythonic way. While they may seem to serve similar purposes in enhancing class functionality, their use cases and underlying behavior differ significantly.

---

## `@property`: Instance-Level Attribute Management

The `@property` decorator allows you to define methods that are accessed like attributes, enabling greater control over getting, setting, and deleting instance-level values. 

### Key Features:
- **Access attributes with logic on the backend**: You can calculate, validate, or format values before exposing them as attributes.
- **Avoid surprises**: Prevent unintended modifications by introducing validation checks when attributes are set or retrieved.
- **Dynamic updates**: Use properties for attributes that depend on other instance attributes.

### Example Use Case: Regulating Attribute Access

Imagine a `Quadrilateral` class where the area depends on height and width:

```python
class Quadrilateral:
    def __init__(self, height, width):
        self._height = height
        self._width = width

    @property
    def area(self):
        return self._height * self._width

    @property
    def height(self):
        return self._height

    @height.setter
    def height(self, value):
        if not isinstance(value, (int, float)):
            raise ValueError("Height must be a number")
        self._height = value

shape = Quadrilateral(10, 5)
print(shape.area)  # Output: 50
shape.height = "11"  # Raises ValueError: Height must be a number
```
**Why Use `@property` Here?**
- It ensures `height` and `width` are always valid.
- Prevents unexpected behavior (e.g., multiplying strings with numbers).
- Keeps the API clean and intuitive (e.g., `shape.area` instead of `shape.area()`).

---

## `@classmethod`: Class-Level Operations

The `@classmethod` decorator defines methods that operate on the class rather than on specific instances. These methods receive the class itself as the first argument (`cls`) and are ideal for operations shared across all instances or alternative constructors.

### When to Use:
- When the logic depends on class-level data or configurations.
- To create factory methods for generating instances in various ways.

---

## Key Differences

### 1. **Scope of Operation**
- **`@property`**: Works at the instance level and provides controlled access to individual attributes.
- **`@classmethod`**: Operates at the class level and is used for methods that affect the class as a whole or return new instances.

### 2. **Access Style**
- **`@property`**: Accessed like an attribute (e.g., `obj.attribute`), even though it encapsulates a method.
- **`@classmethod`**: Called explicitly like a method (e.g., `ClassName.method()`).

### 3. **Common Use Cases**
- **`@property`**: 
  - Dynamic attributes dependent on instance-level values.
  - Validation of instance attributes during setting.
- **`@classmethod`**:
  - Factory methods for alternative object creation.
  - Modifying or accessing shared class-level data.

---

## Why Properties Are Essential in Object-Oriented Programming

Without properties, attributes in Python can be directly modified without any checks, potentially leading to unexpected behavior. For example:

```python
class Quadrilateral:
    def __init__(self, height, width):
        self.height = height
        self.width = width

    def area(self):
        return self.height * self.width

shape = Quadrilateral(10, 5)
print(shape.area())  # Output: 50

shape.height = "11"  # No error, but...
print(shape.area())  # Output: 11111111111 (unexpected)
```
This is where properties shine. By implementing `@property` and a setter method, we can enforce type checks or other rules, preventing invalid assignments.

---

## Practical Example: Managing Dependencies with `@property`

Consider a `Person` class with a `full_name` attribute that depends on `first_name` and `last_name`. Without a property, updating one part (e.g., `last_name`) wouldn’t update the derived `full_name`:

```python
class Person:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.full_name = f"{first_name} {last_name}"

person = Person("John", "Smith")
print(person.full_name)  # Output: John Smith

person.last_name = "Jones"
print(person.full_name)  # Output: John Smith (outdated)
```
By using `@property`, the `full_name` attribute dynamically reflects changes:

```python
class Person:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

person = Person("John", "Smith")
print(person.full_name)  # Output: John Smith

person.last_name = "Jones"
print(person.full_name)  # Output: John Jones
```
---

## Recap: Choosing Between `@property` and `@classmethod`

| Decorator       | Purpose                                                                 | Use Case                                                                                           |
|------------------|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| **`@property`** | Provides controlled, attribute-like access to instance methods          | Dynamic attributes like `area`, validation of instance attributes, derived fields like `full_name`. |
| **`@classmethod`** | Enables class-level operations or alternative constructors            | Factory methods, shared data operations like counters or configuration management.                |

By understanding these differences, you can make informed decisions about when to use each decorator, ensuring your code remains clean, robust, and Pythonic.


# Introduction to Properties in Python

Properties are a fundamental part of Python's object-oriented programming, providing a mechanism to regulate how attributes are accessed and updated dynamically. In this session, we explore why properties are useful and how to create them with the `@property` decorator. 

---

## Problem with Direct Attributes

Imagine an `Employee` class where an email address is derived from the first name (`f_name`) and last name (`l_name`). Initially, this seems simple:

```python
class Employee:
    def __init__(self, f_name, l_name):
        self.f_name = f_name
        self.l_name = l_name
        self.email = f"{f_name}.{l_name}@gmail.com"

employee = Employee("John", "Smith")
print(employee.email)  # Output: john.smith@gmail.com
```
While this works initially, problems arise if the `l_name` attribute is updated later:

```python
employee.l_name = "Jones"
print(employee.email)  # Output: john.smith@gmail.com
```
**Problem**:
- The `email` attribute remains outdated because it was computed only during initialization and isn't aware of changes to `f_name` or `l_name`.

---

## Solution: Using `@property`

Properties dynamically compute their values whenever they are accessed, ensuring they reflect the most up-to-date state of the object.

### Adding a Property for `email`

We can define `email` as a property, making it dynamically derived from `f_name` and `l_name`:

```python
class Employee:
    def __init__(self, f_name, l_name):
        self.f_name = f_name
        self.l_name = l_name

    @property
    def email(self):
        return f"{self.f_name}.{self.l_name}@gmail.com"

employee = Employee("John", "Smith")
print(employee.email)  # Output: john.smith@gmail.com

employee.l_name = "Jones"
print(employee.email)  # Output: john.jones@gmail.com
```
### Key Benefits:
- The `email` property dynamically combines the latest values of `f_name` and `l_name`.
- No risk of outdated or inconsistent attributes.

---

## Implementing a `full_name` Property

Another practical use case is a `full_name` property that combines `f_name` and `l_name`.

```python
class Employee:
    def __init__(self, f_name, l_name):
        self.f_name = f_name
        self.l_name = l_name

    @property
    def full_name(self):
        return f"{self.f_name} {self.l_name}"

employee = Employee("John", "Smith")
print(employee.full_name)  # Output: John Smith

employee.l_name = "Jones"
print(employee.full_name)  # Output: John Jones
```
---

## Why Properties Are Better for Dynamic Attributes

- **Live Updates**: Properties always reflect the latest state of the object.
- **Encapsulation**: Properties abstract the logic of value calculation, hiding implementation details.
- **Consistency**: Computed attributes (like `email` or `full_name`) are always in sync with their dependencies.

---

## Summary

In this session, we introduced the `@property` decorator and demonstrated its advantages over direct attributes:
1. Properties allow for dynamic computation of values.
2. They ensure consistency and prevent stale or outdated attributes.
3. They provide a clean and intuitive interface for accessing derived values.

Properties are especially useful for attributes that combine or depend on other attributes, such as `email` or `full_name`. In the next sessions, we will explore setters and deleters to gain even finer control over how attributes are set and removed.

# Implementing a Property Setter in Python

Property setters in Python are used to control how attributes are updated while allowing for validation or additional processing. This session builds on the previous discussion about getters and demonstrates how to use a setter to validate and modify an attribute dynamically.

---

## Recap: The Role of Getters

We began by defining a private attribute (`_age`) and exposing it via a property:

```python
class Employee:
    def __init__(self, age):
        self._age = age  # Private attribute

    @property
    def age(self):
        return self._age

employee = Employee(45)
print(employee.age)  # Output: 45

Here, the `@property` decorator allows us to retrieve the value of `_age` using `employee.age`.
```
---

## Problem: Modifying the Attribute

If we attempt to set the value of `age`:

```python
employee.age = 50  # This will raise an error
```
Python raises an error because the property is read-only by default without a setter.

---

## Adding a Setter

To enable controlled modification of `age`, we define a setter using the `@property_name.setter` decorator. The setter can include validation logic:

```python
class Employee:
    def __init__(self, age):
        self._age = age  # Private attribute

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, new_age):
        if isinstance(new_age, int) and 18 <= new_age <= 65:
            self._age = new_age
        else:
            raise ValueError(f"Invalid age: {new_age}. Must be an integer between 18 and 65.")

employee = Employee(45)

# Valid update
employee.age = 50
print(employee.age)  # Output: 50

# Invalid update
employee.age = 70  # Raises ValueError: Invalid age: 70. Must be an integer between 18 and 65.
```
---

## Step-by-Step Explanation

1. **Define a Private Attribute**:
   We use `_age` to indicate that the attribute is intended for internal use only.

2. **Create a Getter**:
   The getter allows access to the private attribute.

3. **Define the Setter**:
   - The setter validates the input (`new_age`) to ensure it is an integer and falls within the allowed range.
   - If valid, the private attribute is updated.
   - If invalid, an error is raised with an appropriate message.

---

## Example: Additional Feedback in the Setter

You can provide additional feedback or logging if a value fails validation:

```python
@age.setter
def age(self, new_age):
    if isinstance(new_age, int) and 18 <= new_age <= 65:
        self._age = new_age
    else:
        print(f"Warning: Age not set. Invalid value: {new_age}.")
        raise ValueError(f"Invalid age: {new_age}. Must be an integer between 18 and 65.")
```  
---

## Key Points to Remember

1. **Setters Must Match Property Names**:
   The setter must have the same name as the property it corresponds to.

2. **Validation Logic**:
   Setters are an excellent place to enforce constraints and ensure data integrity.

3. **Error Handling**:
   Use meaningful error messages to guide users when inputs fail validation.

4. **Separation of Concerns**:
   By using getters and setters, you separate access and modification logic from the internal representation of attributes.

---

## Summary

Property setters allow you to control how attributes are updated, enabling validation and additional logic while maintaining a clean and intuitive interface. With a property setter:
- You ensure the integrity of the attribute's value.
- You make your class safer and more robust.

This foundational concept is crucial in object-oriented programming and paves the way for implementing advanced features like property deleters, which will be covered in the next session.


# Understanding Property Deleters

## Overview
Property deleters complete the "trinity" of properties, alongside getters and setters. Deleters allow you to define what happens when a property is deleted using the `del` keyword.

---

## How Property Deleters Work

### The Goal
When you delete a property (e.g., `del instance.property`), you need to:
- Define what happens when the property is removed.
- Reset the internal attribute to a sensible default (e.g., `None`, `0`, or an empty string).

If no deleter is defined, Python will raise an error:
`AttributeError: property <property_name> has no deleter`

---

## Syntax for Property Deleters

To define a deleter, follow these steps:
1. Use the same property name as your getter and setter.
2. Decorate the method with `@property_name.deleter`.

Example:
```python
@property_name.deleter  
def property_name(self):  
    self._property_name = None  # Reset the internal attribute  
```
---

## Implementation Walkthrough

### Example Class with Getter, Setter, and Deleter
```python
class Person:  
    def __init__(self, name, age):  
        self._name = name  
        self._age = age  

    @property  
    def age(self):  
        return self._age  # Getter: Return the internal age  

    @age.setter  
    def age(self, value):  
        if not isinstance(value, int) or value < 0:  
            raise ValueError("Age must be a non-negative integer.")  
        self._age = value  # Setter: Validate and set the value  

    @age.deleter  
    def age(self):  
        self._age = None  # Deleter: Reset the internal age to None  
        print("Age has been reset to None.")  
```
---

### Usage of the Deleter

1. **Create an Instance**:
```python
person = Person("John", 45)  
```
2. **Access the Property**:
```python
print(person.age)  # Output: 45  
```
3. **Delete the Property**:
```python
del person.age  # Resets `_age` to None and prints a confirmation  
print(person.age)  # Output: None  
```
---

## Key Considerations

1. **Reset to a Sensible Default**:
   - For numeric attributes, consider resetting to `0` or `None`.
   - For string attributes, use an empty string (`""`) or a default value.

2. **Consistency**:
   - The property name (`@age`) must be consistent across the getter, setter, and deleter.

3. **Feedback**:
   - Consider adding a print statement or logging message to indicate the property has been reset.

---

## Complete Example with Feedback

```python
class Person:  
    def __init__(self, name, age):  
        self._name = name  
        self._age = age  

    @property  
    def age(self):  
        return self._age  

    @age.setter  
    def age(self, value):  
        if not isinstance(value, int) or value < 0:  
            raise ValueError("Age must be a non-negative integer.")  
        self._age = value  

    @age.deleter  
    def age(self):  
        self._age = None  
        print("Age has been reset to None.")  

# Usage  
person = Person("John", 45)  
print(person.age)  # Output: 45  

del person.age  # Output: Age has been reset to None.  
print(person.age)  # Output: None  
```
---

## Summary

- **Getter (`@property`)**: Access the internal attribute with optional transformation or validation logic.
- **Setter (`@property.setter`)**: Validate or preprocess input before assigning it to the internal attribute.
- **Deleter (`@property.deleter`)**: Reset the internal attribute to a default value and clean up if necessary.

Deleters add another layer of control, making property management more robust and flexible for dynamic attributes.


# Understanding Properties in Python - Summary

## Introduction
Properties in Python allow you to control access to an object's attributes while providing a clean and intuitive interface. They enable logic to be added to attribute access without changing the external interface of a class, supporting encapsulation—a key principle of object-oriented programming.

---

## Key Concepts of Properties

### What Are Properties?
- **@property**: A decorator that turns a method into a getter, allowing you to access the method like an attribute.
- **@setter**: Allows setting a property's value while enforcing validation or logic.
- **@deleter**: Handles the deletion or resetting of a property.

---

## Basic Usage of Properties

### Example with Getter and Setter
```python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value

    @property
    def diameter(self):
        return self._radius * 2

    @property
    def area(self):
        import math
        return math.pi * (self._radius ** 2)

circle = Circle(5)
print(circle.radius)  # Output: 5
print(circle.diameter)  # Output: 10
print(circle.area)  # Output: 78.54

circle.radius = 10
print(circle.diameter)  # Output: 20
```
#### Explanation:
1. **Getter**: The `@property` decorator allows access to `_radius` as `circle.radius`.
2. **Setter**: Validates the input, ensuring the radius is non-negative.
3. **Derived Properties**: `diameter` and `area` are computed dynamically and are read-only.

---

## Deleting a Property
The `@deleter` decorator defines what happens when a property is deleted.

```python
class Square:
    def __init__(self, side):
        self._side = side

    @property
    def side(self):
        return self._side

    @side.setter
    def side(self, value):
        if value < 0:
            raise ValueError("Side cannot be negative")
        self._side = value

    @side.deleter
    def side(self):
        print("Deleting side")
        del self._side

square = Square(5)
print(square.side)  # Output: 5
del square.side  # Output: Deleting side
print(square.side)  # Raises AttributeError
```
---

## Computed Properties
Properties can compute values dynamically, enabling attributes that are derived from other data.

```python
class Employee:
    def __init__(self, first_name, last_name, salary):
        self.first_name = first_name
        self.last_name = last_name
        self.salary = salary

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    @property
    def annual_salary(self):
        return self.salary * 12

employee = Employee("John", "Doe", 3000)
print(employee.full_name)  # Output: John Doe
print(employee.annual_salary)  # Output: 36000
```
---

## Key Considerations
1. **Encapsulation**: Properties allow you to protect internal attributes from being accessed or modified directly.
2. **Validation**: Use setters to enforce rules on attribute values.
3. **Dynamic Updates**: Properties recalculate values when the underlying data changes.
4. **Consistency**: Ensure all related properties stay in sync by recomputing dependent values.

---

## Summary
Properties in Python provide a powerful mechanism to manage an object's attributes effectively:
- **Getter** (`@property`): Access attributes with optional transformation or validation.
- **Setter** (`@property.setter`): Validate and set attribute values.
- **Deleter** (`@property.deleter`): Reset or remove attribute values.

By using properties, you ensure:
- Encapsulation of internal state.
- Consistency and correctness of attribute values.
- Clean and maintainable code.

Properties are an essential tool for writing robust, Pythonic object-oriented code.


# Introduction to Inheritance and Composition in Python

## Overview
Inheritance and composition are two fundamental concepts in object-oriented programming that help structure code efficiently. 

- **Inheritance** allows a class to derive attributes and methods from another class, reducing redundancy.
- **Composition** enables a class to be built from multiple smaller classes, creating modular and reusable components.

Both techniques improve code maintainability and scalability.

---

## Understanding Inheritance

### What is Inheritance?
Inheritance is the mechanism where a class (child or subclass) derives attributes and methods from another class (parent or superclass). This allows for:
- **Code reusability**: Common attributes and methods are defined once in the parent class.
- **Hierarchical relationships**: Organizing classes into logical categories.
- **Simplified subclasses**: Child classes focus on specific behaviors while inheriting general ones.

### Example: Basic Inheritance
```python
class Vehicle:
    def __init__(self, color, power):
        self.color = color
        self.power = power

class Motorbike(Vehicle):
    def __init__(self, color, power, exhaust_system):
        super().__init__(color, power)
        self.exhaust_system = exhaust_system

class Bus(Vehicle):
    def __init__(self, color, power, passengers):
        super().__init__(color, power)
        self.passengers = passengers

motorbike = Motorbike("Red", "150cc", "Dual Exhaust")
bus = Bus("Blue", "Diesel", 50)

print(motorbike.color, motorbike.exhaust_system)  # Output: Red Dual Exhaust
print(bus.color, bus.passengers)  # Output: Blue 50
```
#### Key Points:
- `Motorbike` and `Bus` **inherit** from `Vehicle`, avoiding code duplication.
- The `super()` function calls the parent’s constructor, passing inherited attributes.
- Each subclass introduces its own unique attributes (`exhaust_system`, `passengers`).

---

## Understanding Composition

### What is Composition?
Composition is a design pattern where one class **contains** an instance of another class. Instead of inheriting, a class **is built from** smaller, independent classes. This is useful when:
- A class **"has a"** another class rather than **"is a"** (e.g., a **Car has an Engine** rather than **Car is an Engine**).
- Components need to be **independent and reusable**.

### Example: Composition in Action
```python
class Engine:
    def __init__(self):
        self.time_started = 0

    def start(self):
        self.time_started += 1
        print(f"Engine started {self.time_started} times")

class Car:
    def __init__(self, color, power):
        self.color = color
        self.power = power
        self.engine = Engine()  # Composition: Car has an Engine

    def start_engine(self):
        self.engine.start()

car = Car("Black", "200hp")
car.start_engine()  # Output: Engine started 1 times
car.start_engine()  # Output: Engine started 2 times
```
#### Key Points:
- The `Car` class **contains** an `Engine` instance (`self.engine = Engine()`).
- The `start_engine` method **delegates** the start action to the `Engine` class.
- The `Engine` class remains modular and reusable for other vehicle types.

---

## Key Differences Between Inheritance and Composition

| Feature         | Inheritance | Composition |
|----------------|------------|------------|
| Relationship Type | "Is a" (e.g., `Bus is a Vehicle`) | "Has a" (e.g., `Car has an Engine`) |
| Code Reusability | Shares attributes/methods | Encapsulates related functionality |
| Flexibility | Less flexible; tightly coupled | More flexible; loosely coupled |
| Complexity | Simpler to implement initially | More structured and scalable |

---

## When to Use Inheritance vs. Composition

- **Use inheritance when:**
  - The relationship is truly "is a" (e.g., `Dog` is an `Animal`).
  - You need to share behavior across multiple subclasses.
  - The base class is stable and won't require frequent changes.

- **Use composition when:**
  - The relationship is "has a" (e.g., `Car` has an `Engine`).
  - You need **modular, reusable** components.
  - The functionality needs to be easily **extended or replaced**.

---

## Summary
- **Inheritance** allows a class to derive attributes and methods from a parent class, making it easier to reuse code.
- **Composition** enables classes to be built using instances of other classes, keeping functionality modular and independent.
- **Choosing between inheritance and composition** depends on whether the relationship is **"is a"** or **"has a"**, and how much flexibility the design requires.


# Practical Walkthrough of Inheritance in Python

## Overview
This session provides a hands-on walkthrough of **inheritance**, demonstrating how it simplifies class structures and promotes code reusability. 

We'll:
- Create a `Vehicle` superclass.
- Inherit from `Vehicle` to define a `Motorbike` subclass.
- Explore **method inheritance** and **method overriding**.
- Learn how to leverage `super()` to extend behavior.

---

## Defining the Superclass
A **superclass** (or parent class) contains shared attributes and methods that can be inherited by multiple **subclasses**.

```python
class Vehicle:
    def __init__(self, color: str, power: int):
        print("Creating Vehicle instance")
        self.color = color
        self.power = power

- The `Vehicle` class has:
  - A constructor (`__init__`) that initializes `color` and `power`.
  - A `print()` statement to track instance creation.
```
---

## Creating a Subclass with Inheritance
A **subclass** inherits the properties of a superclass using parentheses:

```python
class Motorbike(Vehicle):
    def __init__(self, color: str, power: int, max_speed: int):
        super().__init__(color, power)  # Call the superclass constructor
        self.max_speed = max_speed  # Define a subclass-specific attribute

- `super().__init__(color, power)`: 
  - Calls the `Vehicle` constructor.
  - Initializes `color` and `power` using the superclass logic.
- `max_speed` is **unique to `Motorbike`**, so it is defined separately.
```
---

## Creating an Instance of the Subclass
```python
bike = Motorbike("Red", 125, 90)
print(vars(bike))
```
- **Expected Output:**
- Creating Vehicle instance {'color': 'Red', 'power': 125, 'max_speed': 90}

- The `Vehicle` constructor is executed first (due to `super()`).
- The `vars()` function confirms attributes are set correctly.

---

## Inheriting Methods from the Superclass
The subclass inherits methods from its parent. Let's define a method in `Vehicle`:

```python
class Vehicle:
  def __init__(self, color: str, power: int):
      print("Creating Vehicle instance")
      self.color = color
      self.power = power

  def print_power(self):
      print(f"Power is {self.power}")
```
Now, without redefining it, `Motorbike` inherits `print_power()`:

```python
bike.print_power()  # Output: Power is 125
```
- The `Motorbike` class does **not** define `print_power()`, but it **inherits** it from `Vehicle`.
- Any subclass can use **inherited methods** unless explicitly overridden.

---

## Overriding Methods in a Subclass
If we redefine `print_power()` inside `Motorbike`, it **overrides** the parent method.

```python
class Motorbike(Vehicle):
  def print_power(self):
      print(f"Power is {self.power} (from Motorbike)")

bike = Motorbike("Red", 125, 90)
bike.print_power()  # Output: Power is 125 (from Motorbike)
```
- The subclass method **takes precedence** over the inherited method.
- If the method is **not overridden**, the superclass version is used.

---

## Enhancing `__str__` with Inheritance
Suppose we want a readable string representation for both `Vehicle` and `Motorbike`.

### Defining `__str__` in the Superclass
```python
class Vehicle:
  def __str__(self):
      return f"Color: {self.color}, Power: {self.power}"
```
### Extending `__str__` in the Subclass
```python
class Motorbike(Vehicle):
  def __str__(self):
      return super().__str__() + f", Max Speed: {self.max_speed}"

bike = Motorbike("Red", 125, 90)
print(bike)  
# Output: Color: Red, Power: 125, Max Speed: 90
```
- `super().__str__()` calls the `Vehicle` version and appends `max_speed`.
- This approach **avoids code duplication** and keeps logic **modular**.

---

## Summary
- **Inheritance** allows a subclass to reuse and extend the functionality of a superclass.
- The `super()` function calls the **parent class constructor**.
- Subclasses **inherit methods** unless they **override** them.
- Using `super()` inside `__str__` allows **method extension** without duplicating code.

This makes class structures **clean, reusable, and efficient**.


# Practical Walkthrough of Composition in Python

## Understanding Composition
**Composition** is a key concept in object-oriented programming where one class contains an instance of another class. It follows a **has-a** relationship rather than an **is-a** relationship seen in inheritance.

In this example:
- **An `ElectricCar` has a `Battery`** (composition).
- The `Battery` class is a separate entity with its own attributes and behavior.

---

## Defining the `Battery` Class
Since `Battery` is used inside `ElectricCar`, we define it first.

```python
class Battery:
    def __init__(self, capacity: float, charges: int = 0):
        self.capacity = capacity
        self.charges = charges
```
- **`capacity`**: Represents battery percentage (e.g., 100%).
- **`charges`**: Tracks the number of charge cycles (default: `0`).

---

## Defining the `ElectricCar` Class
The `ElectricCar` class contains an instance of `Battery`.

```python
class ElectricCar:
    def __init__(self, model: str):
        self.model = model
        self.battery = Battery(100.0)  # Every car starts with a fully charged battery.
```
- **Composition Happens Here**:
  - The `ElectricCar` **owns** a `Battery` instance (`self.battery`).
  - Instead of passing a `Battery` object externally, it is **created inside `ElectricCar`**.

---

## Creating an `ElectricCar` Instance
```python
tesla = ElectricCar("Model S")
print(vars(tesla))
```
- **Expected Output**:
{'model': 'Model S', 'battery': <main.Battery object at 0x...>}

However, the default `__repr__` for `Battery` isn't informative. We can improve this by adding a **custom string representation**.

```python
class Battery:
  def __repr__(self):
      return f"Battery(capacity={self.capacity}, charges={self.charges})"
```
Now, printing `vars(tesla)` provides:
- {'model': 'Model S', 'battery': Battery(capacity=100.0, charges=0)}

---

## Implementing a `drive()` Method
The `drive()` method reduces battery capacity.

```python
class ElectricCar:
    def drive(self):
        if self.battery.capacity <= 10:
            print("Not enough charge!")
        else:
            self.battery.capacity -= 10  # Decrease battery by 10% per drive.
```
Let's test it:

```python
print(vars(tesla))  # Before driving
tesla.drive()
print(vars(tesla))  # After driving
```
- **Expected Output**:
- {'model': 'Model S', 'battery': Battery(capacity=100.0, charges=0)} {'model': 'Model S', 'battery': Battery(capacity=90.0, charges=0)}


---

## Depleting the Battery
What happens if we drive **more than 10 times**?

```python
for _ in range(20):
  tesla.drive()
```
- Once the capacity hits **10% or below**, `Not enough charge!` is printed.
- The battery stops decreasing further.

---

## Implementing a `charge()` Method
Now, let's allow the car to recharge.

```python
class ElectricCar:
  def charge(self, cycles: int):
      for _ in range(cycles):
          if self.battery.capacity >= 100:
              print("Battery is already full!")
              break
          self.battery.capacity += 10  # Increase battery by 10% per cycle.
          self.battery.charges += 1  # Increment charge cycles.
```
Testing it:

```python
tesla.charge(2)
print(vars(tesla))
```
- **If battery was at 70%**:
{'model': 'Model S', 'battery': Battery(capacity=90.0, charges=2)}

- If battery is **already full**, it stops charging.

---

## Summary
- **Composition**: `ElectricCar` contains a `Battery` instance.
- **Encapsulation**: `Battery` handles its own attributes (`capacity`, `charges`).
- **Interacting with Composition**:
- **`drive()`** decreases battery capacity.
- **`charge()`** increases capacity and logs charge cycles.
- **Avoiding Overcharging**: Charging stops at **100%**.

This example highlights how composition improves **code organization and modularity**, making it easier to extend and maintain.


# Stop and Code: Inheritance and Operator Overloading

## Introduction
This session focuses on **inheritance**, where a subclass (`Laptop`) inherits from a superclass (`ComputerSystem`). We'll also implement **operator overloading** by redefining the `==` (`__eq__`) method.

---

## Step 1: Defining the Superclass `ComputerSystem`
We start by creating a superclass `ComputerSystem` with attributes:
- `name` (string)
- `price` (integer)
- A special `__eq__` method to check if two instances have the same name.

```python
class ComputerSystem:
    def __init__(self, name: str, price: int):
        self.name = name
        self.price = price

    def __eq__(self, other):
        return self.name == other.name  # Compare instances based on name

# Testing the superclass
a = ComputerSystem("Dell", 1500)
b = ComputerSystem("Dell", 1500)

print(a == b)  # Output: True

b.name = "HP"
print(a == b)  # Output: False
```
---

## Step 2: Creating the Subclass `Laptop`
The subclass `Laptop` inherits from `ComputerSystem` and introduces:
- `ports` (dictionary) - Tracks port types and quantities.
- A redefined `__eq__` method that **overloads** the superclass's version.

```python
class Laptop(ComputerSystem):
    def __init__(self, name: str, price: int, ports: dict):
        super().__init__(name, price)  # Pass name & price to the superclass
        self.ports = ports  # Define a new attribute specific to Laptop

    def __eq__(self, other):
        return self.ports == other.ports  # Compare instances based on ports

# Creating instances
a = Laptop("HP", 900, {"USB": 3, "USB-C": 2})
b = Laptop("Alienware", 2500, {"USB": 5, "USB-C": 5})

print(a == b)  # Output: False (Different ports)

# Making ports identical
b.ports = {"USB": 3, "USB-C": 2}
print(a == b)  # Output: True (Same ports)
```
---

## Step 3: Understanding Operator Overloading
Initially, `Laptop` inherited the `__eq__` method from `ComputerSystem`, comparing **names**. After overriding `__eq__`, it now compares **ports** instead.

### Superclass Comparison:
```python
a1 = ComputerSystem("Dell", 1500)
b1 = ComputerSystem("Dell", 1800)
print(a1 == b1)  # Output: True (Names match)
```
### Subclass Comparison:
```python
a2 = Laptop("HP", 900, {"USB": 3, "USB-C": 2})
b2 = Laptop("HP", 900, {"USB": 3, "USB-C": 2})
print(a2 == b2)  # Output: True (Ports match)
```
---

## Further Extensions
To improve functionality, consider:
1. **Adding `__str__` and `__repr__`** for better output representation.
2. **Overloading comparison operators** (`__gt__`, `__lt__`) to compare prices.
3. **Implementing `__add__`** to merge two laptops' port configurations.

---

## Conclusion
- **Inheritance**: `Laptop` inherits from `ComputerSystem`, simplifying attribute management.
- **Operator Overloading**: The `__eq__` method was **overridden** to compare ports instead of names.
- **Extensibility**: We can add more dunder methods for further customization.

By understanding these concepts, we can create **clean, scalable, and reusable** object-oriented Python code.


# **Understanding the Difference Between Inheritance and Composition**

When designing object-oriented programs, two primary approaches for structuring relationships between classes are **inheritance** and **composition**. While both allow code reuse, they serve different purposes and come with distinct advantages and trade-offs.

---

## **Key Differences: Inheritance vs. Composition**

| **Inheritance** 🏛 | **Composition** 🏗 |
|--------------------|--------------------|
| **"Is-a" relationship** (e.g., *Dog is an Animal*) | **"Has-a" relationship** (e.g., *Car has an Engine*) |
| The subclass **inherits** attributes and methods from the parent class. | An object **contains** an instance of another class as an attribute. |
| Creates a **stronger** connection between classes. | Creates a **looser** connection between classes. |
| More difficult to modify due to a **fixed hierarchy**. | More flexible; **components can be swapped** or reused easily. |
| Uses `class Subclass(ParentClass)`. | Uses `self.component = ClassName()`. |

---

## **When to Use Inheritance vs. Composition?**
✅ **Use Inheritance** when:
- There is a **clear hierarchical relationship** (e.g., `Dog` *is a* `Animal`).
- The subclass naturally **shares behavior** with the parent class.
- You want to **reuse** logic across multiple similar classes.

✅ **Use Composition** when:
- You need **greater flexibility** (e.g., `Car` *has a* `Engine`, but the engine type can change).
- You want to avoid **deep class hierarchies**, which make maintenance harder.
- You need to **mix and match** different behaviors dynamically.

---

## **Final Thought**
Inheritance **strengthens relationships** but can make the design rigid. Composition **encourages modularity**, making systems more adaptable. Choosing the right approach depends on how **tightly coupled** you want your objects to be.


# **Combining Inheritance and Composition in Python**

In this session, we explored how **inheritance** and **composition** can work together in a structured and maintainable way. By using a **base class** with shared attributes and behaviors and **embedding** another class as an attribute, we created a modular and reusable design.

---

## **1. The Concept: How We Used Inheritance and Composition**
- **Inheritance:** We created an `Employee` **superclass** and two **subclasses**, `Manager` and `Engineer`, that inherited from it.
- **Composition:** Instead of storing address details directly in the `Employee` class, we **composed** an `Address` class and assigned an instance of it to each employee.

This structure made our code more **organized**, **flexible**, and **reusable**.

---

## **2. The Address Class (Composition)**
Instead of storing `street_address`, `city`, and `country` as separate attributes inside `Employee`, we encapsulated them inside an `Address` class.

### **Key Features:**
✅ Uses `__repr__` and `__str__` for better string representation.  
✅ Implements a `neat_print()` method for formatted output.  
✅ Demonstrates how **unpacking (`*args`)** can be used to pass a list of values.

### **Example:**
```python
class Address:
    def __init__(self, street_address, city, country):
        self.street_address = street_address
        self.city = city
        self.country = country

    def __repr__(self):
        return f"Address({self.street_address}, {self.city}, {self.country})"

    def __str__(self):
        return f"{self.street_address}, {self.city}, {self.country}"

    def neat_print(self):
        print(f"City: {self.city}\nCountry: {self.country}\nStreet Address: {self.street_address}")
 ```   
Now, `Employee` **has an** `Address`, making this an example of **composition**.

---

## **3. The Employee Class (Superclass)**
The `Employee` class defines the **core attributes** shared by all employees:
- **`first_name`** and **`last_name`** (formatted with `.title()`)
- **`address`** (stored as an instance of `Address`)
- **`pay`** (representing salary)

### **Example:**
```python
class Employee:
    def __init__(self, first_name, last_name, address, pay):
        self.first_name = first_name.title()
        self.last_name = last_name.title()
        self.address = Address(*address)  # Composition: Creating an Address instance
        self.pay = pay

    def __str__(self):
        return f"{self.first_name} {self.last_name}, Pay: ${self.pay}, Address: {self.address}"
``` 
By using `*address`, we unpack a list of address details into `street_address`, `city`, and `country`.

---

## **4. The Manager and Engineer Classes (Inheritance)**
The `Manager` and `Engineer` classes inherit from `Employee`, but each adds a **unique attribute**:
- `Manager` → `years_as_manager`
- `Engineer` → `specialism`

Each subclass **passes common attributes** to the `Employee` superclass using `super().__init__()`.

### **Example:**
```python
class Manager(Employee):
    def __init__(self, first_name, last_name, address, pay, years_as_manager):
        super().__init__(first_name, last_name, address, pay)
        self.years_as_manager = years_as_manager

class Engineer(Employee):
    def __init__(self, first_name, last_name, address, pay, specialism):
        super().__init__(first_name, last_name, address, pay)
        self.specialism = specialism
```
---

## **5. Creating Instances and Testing**
We now create a `Manager` and an `Engineer` to see how **inheritance** and **composition** work together.

### **Example Usage:**
```python
manager = Manager("Alice", "Johnson", ["123 Business Rd", "New York", "USA"], 85000, 5)
engineer = Engineer("Bob", "Smith", ["456 Tech St", "San Francisco", "USA"], 95000, "Machine Learning")

print(manager)
print(engineer)

# Neat print of the address
engineer.address.neat_print()
```
### **Expected Output:**
Alice Johnson, Pay: $85000, Address: 123 Business Rd, New York, USA Bob Smith, Pay: $95000, Address: 456 Tech St, San Francisco, USA City: San Francisco Country: USA Street Address: 456 Tech St

---

## **6. Key Takeaways**
| Feature      | Inheritance | Composition |
|-------------|------------|-------------|
| Relationship Type | **"is-a"** (e.g., Engineer **is an** Employee) | **"has-a"** (e.g., Employee **has an** Address) |
| Purpose     | Share common attributes and methods | Modularize and separate concerns |
| Flexibility | More rigid (fixed hierarchy) | More flexible (interchangeable components) |
| Usage       | `class Subclass(ParentClass)` | `self.component = ClassName()` |

### **When to Use What?**
✅ Use **inheritance** when objects share a clear "is-a" relationship.  
✅ Use **composition** when you need a "has-a" relationship and want more flexibility.  

---

## **7. Summary**
By combining **inheritance** and **composition**, we created an **Employee** system where:
1. **Managers and Engineers** inherit from `Employee` (showing inheritance).
2. **Each employee "has an" address**, stored as an instance of `Address` (showing composition).

This approach makes code **cleaner, reusable, and modular**, avoiding unnecessary duplication.

---
Now that you've seen how inheritance and composition work together, try extending the system:
🔹 Add more roles like `Intern` or `TeamLead`.  
🔹 Introduce more attributes to `Address` like `postal_code`.  
🔹 Implement **operator overloading** (e.g., compare employees by salary).  

This practice will make you more comfortable with **object-oriented programming** in Python!


# **Understanding Inheritance and Composition in Python**

Inheritance and composition are two fundamental concepts in **object-oriented programming (OOP)** that help organize and structure code efficiently. Both techniques promote **code reuse, modularity, and maintainability**, but they achieve these goals in different ways. Knowing when to use **inheritance** or **composition** is crucial for writing scalable and robust applications.

---

## **1. Inheritance**
### **Definition**
**Inheritance** allows a new class (a **child class**) to inherit the attributes and methods of an existing class (a **parent class**). This creates a structured hierarchy where shared functionality is defined once and passed down to subclasses.

### **1.1 Basic Inheritance Example**
```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclasses must implement this method")

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())  # Output: Buddy says Woof!
print(cat.speak())  # Output: Whiskers says Meow!
``` 
### **1.2 Explanation**
- **Base Class (`Animal`)**: Defines a shared interface (`speak`) and stores a common attribute (`name`).
- **Derived Classes (`Dog` and `Cat`)**: Inherit from `Animal` and override `speak()` with specific implementations.

### **1.3 Benefits of Inheritance**
✅ **Code Reuse** – Shared functionality is defined once in the parent class and inherited by multiple subclasses.  
✅ **Polymorphism** – Different objects (`Dog`, `Cat`) can be treated as instances of the same base class (`Animal`).  
✅ **Extensibility** – New subclasses can be added without modifying existing code.

### **1.4 Drawbacks of Inheritance**
❌ **Tight Coupling** – Child classes depend on the structure of the parent class, making future modifications harder.  
❌ **Inflexibility** – Changes to the base class affect all derived classes, which can introduce unexpected issues.  
❌ **Deep Hierarchies** – Excessive inheritance can lead to complex and difficult-to-maintain class structures.  

---

## **2. Composition**
### **Definition**
**Composition** models a "has-a" relationship, where an object is composed of multiple smaller objects rather than inheriting behavior from a parent class. This makes the system **more flexible** and encourages **modular design**.

### **2.1 Basic Composition Example**
```python
class Engine:
    def start(self):
        return "Engine started"

class Wheels:
    def rotate(self):
        return "Wheels are rotating"

class Car:
    def __init__(self):
        self.engine = Engine()  # Composition: Car "has an" Engine
        self.wheels = Wheels()  # Car "has" Wheels

    def drive(self):
        return f"{self.engine.start()} and {self.wheels.rotate()}"

car = Car()
print(car.drive())  # Output: Engine started and Wheels are rotating
```
### **2.2 Explanation**
- **Component Classes (`Engine`, `Wheels`)**: Define separate pieces of functionality.
- **Composite Class (`Car`)**: Creates instances of `Engine` and `Wheels` as attributes and uses them to define its behavior.

### **2.3 Benefits of Composition**
✅ **Loose Coupling** – The `Car` class is **not tightly bound** to any specific engine or wheel implementation, making changes easier.  
✅ **Reusability** – Individual components (`Engine`, `Wheels`) can be reused across different classes.  
✅ **Encapsulation** – Each component manages its own functionality, keeping concerns separate and improving maintainability.  

### **2.4 Using Composition Instead of Inheritance**
Consider a scenario where we want to **separate battery functionality from an electric car** instead of making it a subclass.

```python
class Battery:
    def __init__(self, capacity):
        self.capacity = capacity

    def charge(self):
        return f"Battery charged to {self.capacity}%"

class ElectricCar:
    def __init__(self, battery_capacity):
        self.battery = Battery(battery_capacity)  # Composition: ElectricCar "has a" Battery

    def charge_battery(self):
        return self.battery.charge()

tesla = ElectricCar(85)
print(tesla.charge_battery())  # Output: Battery charged to 85%
```
🔹 **Why is this better than inheritance?**
- Instead of making `Battery` a subclass of `ElectricCar`, composition allows `Battery` to be a **separate, reusable component**.
- If we later want to add different battery types, we can **swap out** the `Battery` class **without modifying `ElectricCar`**.

---

## **3. Choosing Between Inheritance and Composition**
| Feature      | Inheritance | Composition |
|-------------|------------|-------------|
| **Relationship** | **"is-a"** (Dog **is an** Animal) | **"has-a"** (Car **has an** Engine) |
| **Structure** | Hierarchical, rigid | Modular, flexible |
| **Code Reuse** | Through shared base class | By combining reusable components |
| **Flexibility** | Lower (tight coupling) | Higher (loose coupling) |
| **Use Case** | When subclasses naturally extend parent class behavior | When an object is composed of independent parts |

### **3.1 When to Use Inheritance**
✅ There is a **clear hierarchy** (e.g., **Dog is an Animal**).  
✅ You want **to reuse shared behavior** across multiple related subclasses.  
✅ You need **polymorphism**, where different subclasses share a common interface.  

### **3.2 When to Use Composition**
✅ You want **greater flexibility** (e.g., **a Car can have different types of Engines**).  
✅ The components are **reusable** in different contexts.  
✅ The relationship is **"has-a"** rather than **"is-a"**.  

---

## **4. Conclusion**
✅ **Inheritance** is useful when there is a **clear hierarchical relationship**, where child classes naturally extend the behavior of a parent class.  
✅ **Composition** is often preferred for **greater flexibility**, as objects are built from independent components that can be replaced or extended easily.  
✅ **The best approach** often combines **both** techniques—use inheritance for shared structure, and composition to manage relationships between independent objects.  

# **Introduction to SOLID Principles: Single Responsibility Principle (SRP)**

## **1. What Are SOLID Principles?**
The **SOLID** principles are a set of five design guidelines introduced by **Robert C. Martin** to help developers write **clean, maintainable, and scalable** object-oriented code. These principles encourage **better software architecture** by making code more **modular, reusable, and easier to modify**.

Each letter in **SOLID** stands for a different principle:
- **S** – **Single Responsibility Principle (SRP)**
- **O** – **Open/Closed Principle (OCP)**
- **L** – **Liskov Substitution Principle (LSP)**
- **I** – **Interface Segregation Principle (ISP)**
- **D** – **Dependency Inversion Principle (DIP)**

This session focuses on the **Single Responsibility Principle (SRP)**, which is the first and arguably the simplest of the five.

---

## **2. Single Responsibility Principle (SRP)**
### **2.1 Definition**
**A class should have only one reason to change.**  
This means that **a class should only have one job** and **be responsible for a single part of the functionality**.

**Why is this important?**
- It makes the code **easier to understand**.
- It makes the class **easier to modify** without introducing bugs.
- It ensures **better separation of concerns**, reducing dependencies.

---

## **3. Example of a Class Violating SRP**
Consider the following class, which **both generates content and saves a file**:

```python
class FileSaver:
    def __init__(self, text, filename):
        self.text = text
        self.filename = filename

    def save_file(self):
        self.generate_content()
        self.format_content()
        with open(self.filename, "w") as file:
            file.write(self.text)

    def generate_content(self):
        if not self.text:
            self.text = "Default content generated."

    def format_content(self):
        self.text = self.text.upper()
```
### **3.1 Problems with This Approach**
❌ **Multiple responsibilities** – The class is responsible for:
   - Generating content (`generate_content`)
   - Formatting content (`format_content`)
   - Saving to a file (`save_file`)
   
❌ **Difficult to modify** – If we want to change the file-saving logic, we risk affecting text formatting.

❌ **Hard to test** – Unit testing the `save_file` method requires testing both text processing and file operations.

---

## **4. Refactoring the Code to Follow SRP**
To follow **SRP**, we **split responsibilities** into separate classes:
- A **`TextHandler`** class will handle text generation and formatting.
- A **`FileSaver`** class will be responsible for saving the file.

```python
class TextHandler:
    def __init__(self, text):
        self.text = text

    def generate_content(self):
        if not self.text:
            self.text = "Default content generated."

    def format_content(self):
        self.text = self.text.upper()

class FileSaver:
    def __init__(self, text, filename):
        self.text = text
        self.filename = filename

    def save_file(self):
        with open(self.filename, "w") as file:
            file.write(self.text)
```
### **4.1 Benefits of This Approach**
✅ **Clear separation of concerns** – `TextHandler` deals with text, while `FileSaver` deals with file operations.  
✅ **Easier maintenance** – We can modify `FileSaver` without affecting text handling.  
✅ **Better testability** – We can independently test `TextHandler` and `FileSaver`.

---

## **5. Implementing the Refactored Code**
Now, we can **use both classes together** in a modular way:

```python
# Step 1: Handle text
text_processor = TextHandler("")
text_processor.generate_content()
text_processor.format_content()

# Step 2: Save to file
file_saver = FileSaver(text_processor.text, "myfile.txt")
file_saver.save_file()

### **5.1 Expected Output**
If the input text is empty, `generate_content()` assigns a default value.  
If the input text exists, `format_content()` makes it uppercase.
```
Contents of `myfile.txt`:
DEFAULT CONTENT GENERATED.

---

## **6. Key Takeaways**
🔹 **A class should have only one responsibility** – If it does multiple things, **split it into smaller classes**.  
🔹 **SRP improves maintainability** – Changes to one part of the system do not affect unrelated parts.  
🔹 **SRP makes testing easier** – You can test text processing separately from file saving.  
🔹 **Following SRP leads to cleaner and more modular code**, making it **easier to scale and modify**.  

By **structuring your code properly from the beginning**, you **avoid future complexity** and **write better software**.

# **Open/Closed Principle (OCP) – SOLID Principles**

## **1. What is the Open/Closed Principle?**
The **Open/Closed Principle (OCP)** states that:  
> **"A class should be open for extension but closed for modification."**  

This means that **existing code should not be modified** when adding new functionality. Instead, new behavior should be introduced by **extending existing classes** rather than changing them.  

This principle helps achieve:
- **Code stability** – Modifying existing code can introduce bugs.
- **Extensibility** – New features can be added without affecting the existing system.
- **Maintainability** – Code remains modular and easy to understand.

---

## **2. Violating the Open/Closed Principle**
Let's consider a **notifier system** that sends messages via different channels (Email, SMS, etc.).  
A **bad design** might look like this:

```python
class Notifier:
    def __init__(self, method):
        self.method = method

    def send(self, message):
        if self.method == "email":
            print(f"Sending email: {message}")
        elif self.method == "sms":
            print(f"Sending SMS: {message}")
        else:
            raise ValueError("Invalid notification method")

# Example usage:
notifier = Notifier("email")
notifier.send("Hello!")
```
### **2.1 Problems with This Approach**
❌ **Not extensible** – If we want to add a new notification type (e.g., push notifications),  
   we must modify the `send` method, violating OCP.  
❌ **Code duplication** – Every time we add a new method, we add another `if-elif` block.  
❌ **Harder maintenance** – The `Notifier` class keeps growing in complexity.

---

## **3. Applying the Open/Closed Principle**
Instead of modifying an existing class, we can **use inheritance** to create new notifiers.  

### **3.1 Correct Implementation Using OCP**
We define a **generic base class** `Notifier` and extend it for specific notification types:

```python
class Notifier:
    def send(self, message):
        raise NotImplementedError("Subclasses must implement this method")

class EmailNotifier(Notifier):
    def send(self, message):
        print(f"Sending email: {message}")

class SMSNotifier(Notifier):
    def send(self, message):
        print(f"Sending SMS: {message}")

# Example usage:
notifier1 = EmailNotifier()
notifier1.send("Hello via Email!")

notifier2 = SMSNotifier()
notifier2.send("Hello via SMS!")
```
---

## **4. Benefits of This Approach**
✅ **Extensible** – To add new notifiers (e.g., PushNotifier, WhatsAppNotifier), we **create new classes** instead of modifying existing code.  
✅ **No risk of breaking existing functionality** – The base class remains unchanged.  
✅ **Follows SRP** – Each class has a single responsibility (handling one notification type).  

---

## **5. Key Takeaways**
🔹 **Base classes should be generic and not care about implementation details.**  
🔹 **New behavior should be added via extension, not modification.**  
🔹 **Inheritance and abstraction help enforce the Open/Closed Principle.**  

By following **OCP**, we create **modular, scalable, and maintainable** software that adapts to new requirements **without modifying existing code**.


# **Liskov Substitution Principle (LSP) – SOLID Principles**

## **1. What is the Liskov Substitution Principle?**
The **Liskov Substitution Principle (LSP)** states that:
> **"A subclass should be able to replace its superclass without causing unexpected behavior or errors."**  

In simple terms, any instance of a subclass should be able to **stand in place** of its superclass **without altering the program's correctness**.

### **1.1 Why is LSP Important?**
- Ensures that inheritance **does not break** program functionality.
- Encourages **correct hierarchy design** where subclasses follow the expected behavior of their superclass.
- Helps in writing **robust, reusable, and maintainable** code.

---

## **2. Example of LSP Violation**
Let's take an example using **Rectangle** and **Square**. A **Square** technically is a type of **Rectangle**, but inheriting from `Rectangle` causes unexpected behavior.

### **2.1 Bad Example (Violating LSP)**

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def set_width(self, width):
        self.width = width

    def set_height(self, height):
        self.height = height

    def area(self):
        return self.width * self.height

class Square(Rectangle):
    def set_width(self, width):
        self.width = width
        self.height = width  # Overrides height to always match width

    def set_height(self, height):
        self.height = height
        self.width = height  # Overrides width to always match height

def process_rectangle(rectangle):
    rectangle.set_width(5)
    rectangle.set_height(10)
    assert rectangle.area() == 50  # Expecting area = 5 * 10

# Testing with Rectangle (works fine)
rect = Rectangle(4, 6)
process_rectangle(rect)  # No assertion error

# Testing with Square (fails)
sq = Square(4, 4)
process_rectangle(sq)  # AssertionError: Expected area 50, got 100
```
---

### **2.2 Why Does This Violate LSP?**
🔴 **Unexpected behavior** – The `Square` class overrides the `set_width` and `set_height` methods to always make both dimensions equal, breaking expectations from `Rectangle`.  
🔴 **Incorrect substitution** – The function `process_rectangle()` expects that setting width and height separately is valid, but `Square` **breaks this assumption**.  
🔴 **Leads to errors** – The assertion fails when using `Square`, proving it **cannot** replace `Rectangle` without altering behavior.

---

## **3. Correcting the LSP Violation**
Instead of inheriting `Square` from `Rectangle`, we should **create a more generic class** (`Shape`) and implement `Rectangle` and `Square` separately.

### **3.1 Correct Approach**

```python
class Shape:
    def area(self):
        raise NotImplementedError("Subclasses must implement this method")

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side

def process_shape(shape):
    print(f"Area: {shape.area()}")

# Testing with Rectangle and Square
rect = Rectangle(5, 10)
sq = Square(7)

process_shape(rect)  # Area: 50
process_shape(sq)    # Area: 49
```
---

## **4. Benefits of Following LSP**
✅ **Prevents inheritance misuse** – We ensure that subclasses behave exactly like their superclass.  
✅ **Avoids unexpected errors** – Functions expecting a superclass won’t break when given a subclass.  
✅ **Promotes better design** – Instead of forcing inheritance, we use a common interface (`Shape`) and let each class implement its own behavior.

---

## **5. Key Takeaways**
- **A subclass should never override behavior in a way that breaks the expectations of its superclass.**
- **If a subclass cannot truly behave like its parent class, it should not inherit from it.**
- **Favor composition or a more abstract parent class (`Shape`) instead of forcing inheritance where it doesn’t fit.**

By following the **Liskov Substitution Principle**, we ensure **robust, flexible, and maintainable** object-oriented designs.


# **Interface Segregation Principle (ISP) – SOLID Principles**

## **1. What is the Interface Segregation Principle?**
The **Interface Segregation Principle (ISP)** states that:
> **"Clients should not be forced to depend on interfaces they do not use."**  

In simple terms, **a class should only implement methods that are relevant to it.**  
Instead of having one **large interface (or class)** with many methods, it's better to have **smaller, more specific interfaces.**  

### **1.1 Why is ISP Important?**
✅ **Prevents unnecessary dependencies** – A class should only use what it actually needs.  
✅ **Improves code clarity** – Each interface represents a **specific behavior**, making the code easier to understand.  
✅ **Enhances flexibility** – New features can be added **without modifying unrelated classes**.

---

## **2. Example of ISP Violation**
Let's take an example where we have a **Worker** class that defines three methods:  
✔️ `work()` – Common to all workers  
❌ `eat()` – Not relevant for robots  
❌ `sleep()` – Not relevant for robots  

### **2.1 Bad Example (Violating ISP)**

```python
class Worker:
    def work(self):
        print("Working...")

    def eat(self):
        print("Eating lunch...")

    def sleep(self):
        print("Sleeping...")

class HumanWorker(Worker):
    pass  # Humans can work, eat, and sleep

class RobotWorker(Worker):
    def eat(self):
        raise NotImplementedError("Robots don't eat!")

    def sleep(self):
        raise NotImplementedError("Robots don't sleep!")

# Testing the behavior
human = HumanWorker()
human.work()  # ✅ Works fine
human.eat()   # ✅ Works fine
human.sleep() # ✅ Works fine

robot = RobotWorker()
robot.work()  # ✅ Works fine
robot.eat()   # ❌ Raises NotImplementedError
robot.sleep() # ❌ Raises NotImplementedError
```
---

### **2.2 Why Does This Violate ISP?**
🔴 **Forcing unnecessary methods** – `RobotWorker` has to implement `eat()` and `sleep()`, even though robots **don’t** perform these actions.  
🔴 **Breaks Open/Closed Principle** – Every time a new worker type is added (e.g., **AndroidWorker**), it must override `eat()` and `sleep()` **even if not applicable**.  
🔴 **Code becomes error-prone** – If `RobotWorker` is mistakenly used where `eat()` is expected, it will **cause runtime errors**.

---

## **3. Correcting ISP – Using Smaller Interfaces**
Instead of a **single large interface**, we create **smaller, focused interfaces** (`Workable`, `Eatable`, `Sleepable`)  
Each worker **only implements what it needs**.

### **3.1 Good Example (Following ISP)**

```python
class Workable:
    def work(self):
        print("Working...")

class Eatable:
    def eat(self):
        print("Eating lunch...")

class Sleepable:
    def sleep(self):
        print("Sleeping...")

class HumanWorker(Workable, Eatable, Sleepable):  # ✅ Implements all relevant behaviors
    pass

class RobotWorker(Workable):  # ✅ Only implements what it needs
    pass

# Testing the behavior
human = HumanWorker()
human.work()  # ✅ Works fine
human.eat()   # ✅ Works fine
human.sleep() # ✅ Works fine

robot = RobotWorker()
robot.work()  # ✅ Works fine
# robot.eat()  # ❌ AttributeError: 'RobotWorker' object has no attribute 'eat'
# robot.sleep() # ❌ AttributeError: 'RobotWorker' object has no attribute 'sleep'
```
---

## **4. Benefits of Following ISP**
✅ **No unnecessary methods** – `RobotWorker` **only** has the `work()` method.  
✅ **Easier to extend** – If we add a new worker type (e.g., `CyborgWorker`), we **only** implement the relevant behaviors.  
✅ **Avoids runtime errors** – No risk of calling an unimplemented method (`NotImplementedError`).  
✅ **Improves maintainability** – Each interface is **independent** and can be modified **without breaking other classes**.

---

## **5. Key Takeaways**
- **Each class should only implement what it actually needs.**
- **Use multiple, smaller interfaces instead of one large interface.**
- **Avoid forcing a class to implement methods that do not apply to it.**
- **Following ISP makes the code modular, easier to maintain, and less error-prone.**

By following the **Interface Segregation Principle**, we build **flexible and scalable** object-oriented designs.


# **Dependency Inversion Principle (DIP) – SOLID Principles**

The **Dependency Inversion Principle (DIP)** is the last of the **SOLID** principles and arguably one of the most important. It helps to **decouple high-level and low-level components**, making the code **more flexible and maintainable**.

---

## **1. What is the Dependency Inversion Principle?**
The **DIP states that**:
1. **High-level modules** should not depend on **low-level modules**. **Both should depend on abstractions.**
2. **Abstractions should not depend on details.** **Details should depend on abstractions.**

### **1.1 Why is DIP Important?**
✅ **Reduces tight coupling** – Makes the system **easier to extend**.  
✅ **Encourages modularity** – New functionalities can be added **without modifying existing code**.  
✅ **Enhances testability** – Code is easier to **mock** and **unit test**.  

---

## **2. Example of DIP Violation**
Let's consider a **User** class that needs to **send notifications**.  
Currently, it **directly depends** on an `EmailService` class.  
This makes the `User` class **tightly coupled** with `EmailService`, **violating DIP**.

### **2.1 Bad Example (Violating DIP)**

```python
class EmailService:
    def send_email(self, message):
        print(f"Sending Email: {message}")

class User:
    def __init__(self, email_service):
        self.email_service = email_service  # Direct dependency

    def notify(self, message):
        self.email_service.send_email(message)  # Tightly coupled to EmailService

# Creating an instance
email_service = EmailService()
user = User(email_service)

user.notify("Welcome to our service!")  # ✅ Works, but tightly coupled to email
```
---

### **2.2 Why Does This Violate DIP?**
🔴 **Direct dependency on `EmailService`** – The `User` class **only works with emails**.  
🔴 **No flexibility** – If we need to **add SMS notifications**, we **must modify the `User` class**.  
🔴 **Harder to test** – We cannot easily **mock** the notification system.  

---

## **3. Correcting DIP – Using Abstraction**
Instead of depending on **concrete implementations** (like `EmailService`),  
we **create an abstraction** (`Notifier`) and let **specific implementations** (Email, SMS) depend on it.

### **3.1 Good Example (Following DIP)**

```python
# Step 1: Create an abstraction (interface)
class Notifier:
    def send(self, message):
        raise NotImplementedError

# Step 2: Implement concrete notification methods
class EmailNotifier(Notifier):
    def send(self, message):
        print(f"Sending Email: {message}")

class SMSNotifier(Notifier):
    def send(self, message):
        print(f"Sending SMS: {message}")

# Step 3: User class depends on abstraction (not a specific service)
class User:
    def __init__(self, notifier: Notifier):
        self.notifier = notifier  # Now depends on abstraction

    def notify(self, message):
        self.notifier.send(message)  # Works with any notifier

# Step 4: Creating instances with different notifiers
email_user = User(EmailNotifier())
sms_user = User(SMSNotifier())

email_user.notify("Welcome via Email!")  # ✅ Sending Email: Welcome via Email!
sms_user.notify("Welcome via SMS!")      # ✅ Sending SMS: Welcome via SMS!
```
---

## **4. Benefits of Following DIP**
✅ **No direct dependencies** – `User` **does not know** whether it's using email, SMS, or something else.  
✅ **Easier to extend** – We can **add new notification methods** (e.g., WhatsApp, Slack) **without modifying** `User`.  
✅ **More testable** – We can **mock** `Notifier` during unit testing.  

---

## **5. Key Takeaways**
- **High-level modules (e.g., `User`) should not depend on low-level modules (e.g., `EmailService`).**  
- **Both should depend on abstractions (e.g., `Notifier`).**  
- **Concrete implementations (Email, SMS) should depend on abstractions, not vice versa.**  
- **DIP makes code more modular, flexible, and easier to maintain.**  

By applying the **Dependency Inversion Principle**, we create **scalable and loosely coupled** systems, reducing dependencies and increasing reusability.


# **Understanding the SOLID Principles with Real-Life Analogies**

The **SOLID** principles are a set of five guidelines for writing maintainable, flexible, and scalable software. Let's break them down using **real-life analogies**:

---

## **1. Single Responsibility Principle (SRP)**
### **Analogy**: A **pencil** 📝
A pencil is designed **only for writing or drawing**. You wouldn’t use it to **fix your car** or **cook dinner**. If a pencil tried to do multiple things, it wouldn't be good at any of them.

### **Explanation**
A **class or function** should have **only one reason to change**.  
If it does **too many things**, it becomes **harder to maintain** and **more prone to bugs**.

---

## **2. Open/Closed Principle (OCP)**
### **Analogy**: A **smartphone** 📱
You can **install new apps** without **modifying** the phone itself.  
The phone is **designed to be extended** with new features **without altering** its core.

### **Explanation**
Software components should be **open for extension** but **closed for modification**.  
You should be able to **add new functionality** without **changing existing code**, reducing the risk of breaking things.

---

## **3. Liskov Substitution Principle (LSP)**
### **Analogy**: A **sports team** ⚽
If a **coach** substitutes one player for another, the **game continues** smoothly.  
The new player should be **able to perform the same role** as the one replaced.

### **Explanation**
Subtypes should be **substitutable** for their base types **without breaking functionality**.  
If a subclass is used **instead of its parent class**, the program should still **work correctly**.

---

## **4. Interface Segregation Principle (ISP)**
### **Analogy**: **Kitchen appliances** 🍞☕
A **blender blends**, a **toaster toasts**, and a **coffee maker brews coffee**.  
Each appliance does **one specific job**. You wouldn’t want **one device that tries to do everything** because it would be **complicated** and **inefficient**.

### **Explanation**
A class should **not be forced** to depend on **methods it doesn’t use**.  
Instead of **one big interface**, it’s better to have **multiple smaller, specific ones**.

---

## **5. Dependency Inversion Principle (DIP)**
### **Analogy**: A **home theater system** 🎬🔊
A home theater system **uses standard connections** (like **HDMI**), so you can connect **any brand** of **speakers, DVD players, or game consoles**.  
The system **doesn't rely on a specific brand**, making it **flexible**.

### **Explanation**
High-level modules **should not depend** on low-level modules.  
**Both should depend on abstractions** (like interfaces).  
This makes the system **more modular and easier to modify**.

---

# **📊 Summary Table**

| **Principle** | **Analogy** | **Key Concept** |
|--------------|------------|---------------|
| **Single Responsibility Principle (SRP)** | 📝 **Pencil** – A pencil **only writes**; doing too much makes it ineffective. | A class should **only do one thing** and have **one reason to change**. |
| **Open/Closed Principle (OCP)** | 📱 **Smartphone** – You can install **new apps** without modifying the phone. | Classes should be **open for extension**, but **closed for modification**. |
| **Liskov Substitution Principle (LSP)** | ⚽ **Sports team** – Substituting a player should **not break the game**. | Subclasses should be able to **replace their base class** without breaking functionality. |
| **Interface Segregation Principle (ISP)** | 🍞☕ **Kitchen appliances** – A blender blends, a toaster toasts. **Each does one job well.** | Classes should **not be forced** to implement **methods they don’t use**. |
| **Dependency Inversion Principle (DIP)** | 🎬🔊 **Home theater system** – Uses **standard HDMI connections**, so **any brand works**. | High-level modules should depend on **abstractions, not concrete implementations**. |

---

## **🚀 Why SOLID Matters?**
- **Better code organization** ✅  
- **Easier to maintain and extend** ✅  
- **Less risk of breaking existing functionality** ✅  
- **More flexible and scalable applications** ✅  

By following the **SOLID** principles, you ensure that **your software is structured, maintainable, and adaptable** to future changes.

# **Introduction to Data Classes in Python**

Data classes are one of the most **useful** and **elegant** features in Python. They simplify the creation of **lightweight data structures** by **reducing boilerplate code**. In this session, we will:
- **Discover the benefits** of data classes.
- **Compare them** with traditional classes.
- **Understand when** to use a data class over a regular class.

---

## **🔍 Why Use Data Classes?**
A **data class** is ideal when you need to store **structured data** without writing a lot of redundant code.  

### **💡 Problem with Traditional Classes**
Imagine we have a simple **Person class** with just a **name** and **age**, and no additional logic. With a traditional class, we still have to manually write:
1. **`__init__` method** (for initialization).
2. **`__repr__` method** (for string representation).
3. **`__eq__` method** (for equality comparison).

### **🆚 Traditional Class vs. Data Class**
#### **Traditional Class**
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return f"Person(name={self.name}, age={self.age})"

    def __eq__(self, other):
        if isinstance(other, Person):
            return self.name == other.name and self.age == other.age
        return False

person1 = Person("Alice", 30)
person2 = Person("Alice", 30)
print(person1)  # Person(name=Alice, age=30)
print(person1 == person2)  # True
```
🔹 **Issues**:  
- We **manually** define `__init__`, `__repr__`, and `__eq__`.
- A **lot of boilerplate code** for a simple class.

#### **Data Class**
```python
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int

person1 = Person("Alice", 30)
person2 = Person("Alice", 30)
print(person1)  # Person(name='Alice', age=30)
print(person1 == person2)  # True
```
✅ **Benefits** of using `@dataclass`:
- **Automatic `__init__`, `__repr__`, and `__eq__`** (No need to write them manually).
- **More readable & maintainable**.
- **Less boilerplate code**.

---

## **🚀 Key Features of Data Classes**
1. **Pre-built `__init__`, `__repr__`, `__eq__`, and `__hash__`**  
   - Saves time and reduces human errors.
2. **Default Values & Mutability**  
   - Easily define **default values**.
3. **Post-Initialization Hook (`__post_init__`)**  
   - Allows additional processing **after** object creation.
4. **Immutability with `frozen=True`**  
   - Prevents modification of attributes.

### **Example: Using Default Values and `__post_init__`**
```python
from dataclasses import dataclass, field

@dataclass
class Person:
    name: str
    age: int = 25  # Default value
    country: str = field(default="Unknown")  # Default using field()
    
    def __post_init__(self):
        self.name = self.name.title()  # Automatically capitalize name

p = Person("alice")
print(p)  # Person(name='Alice', age=25, country='Unknown')
```
---

## **📌 When to Use Data Classes?**
| **Use Case** | **Traditional Class** | **Data Class** |
|-------------|----------------|-------------|
| **Simple data storage** (e.g., Person, Point, Rectangle) | ❌ Too much boilerplate | ✅ Less code, auto-generated methods |
| **Complex behavior & logic** | ✅ Better choice | ❌ Data classes are meant for data storage, not logic-heavy classes |
| **Immutability required** | ✅ Use `@property` decorators | ✅ Use `@dataclass(frozen=True)` |
| **Customization needed** (e.g., overriding methods) | ✅ More flexibility | ⚠️ Possible, but reduces simplicity |

---

## **🔚 Conclusion**
- **Data classes** make simple data storage **more efficient**.  
- If you only need attributes **without complex behavior**, **use `@dataclass`**.  
- For **complex logic-heavy classes**, **stick to traditional OOP classes**.


# **Exploring Data Classes in Python – A Hands-On Guide** 🚀

Data classes in Python **simplify object creation** by reducing boilerplate code while providing powerful built-in features. In this session, we will:
- **Create simple data classes** 📝
- **Understand key features** like immutability, default values, and post-initialization
- **Compare them with traditional classes** 🆚

---

## **🔍 Setting Up a Simple Data Class**
A **data class** is defined using the `@dataclass` decorator from Python's built-in `dataclasses` module.

### **🆚 Traditional Class vs. Data Class**
#### **Traditional Class**
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person("John", 25)
print(person)  # <__main__.Person object at 0x...>
```
⚠️ **Issue**: Prints a memory address instead of meaningful data.

#### **Using a Data Class**
```python
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int

person = Person("John", 25)
print(person)  # Person(name='John', age=25)
```
✅ **Advantages**:
- No need to define `__init__`, `__repr__`, or `__eq__`
- More readable and concise

---

## **🎯 Built-in Features of Data Classes**
### **1️⃣ Automatic Equality Checking (`__eq__`)**
Data classes automatically compare objects **based on their attributes**.

```python
john1 = Person("John", 25)
john2 = Person("John", 25)
print(john1 == john2)  # True

john2.age = 26
print(john1 == john2)  # False
```
---

### **2️⃣ Immutability with `frozen=True`**
Make a data class **read-only** by preventing attribute modifications.

```python
@dataclass(frozen=True)
class Person:
    name: str
    age: int

p = Person("Alice", 30)
p.age += 1  # ❌ Error: Cannot assign to field 'age'
```
---

### **3️⃣ Default Values**
Define **default values** for attributes.

```python
from dataclasses import field

@dataclass
class Car:
    make: str
    year: int
    mileage: int = 0  # Default value

car = Car("Honda", 2020)
print(car)  # Car(make='Honda', year=2020, mileage=0)
```
---

### **4️⃣ Post-Initialization (`__post_init__`)**
Use `__post_init__` to **modify attributes after initialization**.

```python
@dataclass
class Shape:
    height: int
    width: int
    area: int = field(init=False)  # Prevents initialization

    def __post_init__(self):
        self.area = self.height * self.width  # Automatically calculates area

shape = Shape(10, 7)
print(shape)  # Shape(height=10, width=7, area=70)
```
✅ **Why use `__post_init__`?**
- Ensures **dependent attributes** (like `area`) are **calculated automatically**.
- Useful for **complex object initialization**.

---

## **📌 Key Takeaways**
| Feature | Traditional Class | Data Class |
|---------|----------------|------------|
| **Boilerplate Code** | ✅ Requires manual methods | ❌ Automatically generated |
| **Readability** | ❌ Can be lengthy | ✅ Clean & concise |
| **Equality Checking** | ❌ Must define `__eq__` | ✅ Built-in comparison |
| **Mutability Control** | ✅ Can use `@property` | ✅ Use `frozen=True` |
| **Default Values** | ✅ Possible | ✅ Easier with `field()` |
| **Post Initialization** | ❌ Requires manual setup | ✅ Uses `__post_init__` |

---

## **🔚 Conclusion**
Data classes **simplify** object creation by **removing redundant code** while keeping functionality **intact**.  
**When to use them?** ✅  
- **For simple data structures** without complex logic.  
- **When built-in methods (`__init__`, `__repr__`, `__eq__`) are useful.**  

**When not to use them?** ❌  
- **For classes with extensive business logic** (use traditional OOP instead).  

In the next session, we’ll **explore more advanced use cases** and see how **data classes can be extended** further!


# **Advanced Data Classes in Python** 🚀

In this session, we explore more advanced topics related to **data classes**, including **methods, operator overloading, default factories, and inheritance**.

---

## **📌 1. Methods in Data Classes**
Even though data classes are primarily for storing data, you can still define **methods** inside them.

### **✅ Example**
```python
from dataclasses import dataclass

@dataclass
class Dog:
    breed: str
    color: str

    def bark(self):
        print(f"Woof! I am a {self.breed.title()}.")

# Create an instance
gromit = Dog("beagle", "brown")
print(gromit)  # Dog(breed='beagle', color='brown')

# Call method
gromit.bark()  # Woof! I am a Beagle.
```
### **🔹 Key Takeaway**
- Methods work **exactly the same** as in traditional classes.
- If you find yourself adding **many methods**, it **might be better to use a regular class**.

---

## **📌 2. Overloading the Equality Operator (`==`)**
By default, **data classes compare all attributes**. You can override this behavior.

### **✅ Example**
```python
@dataclass
class Dog:
    breed: str
    color: str

    def __eq__(self, other):
        return self.breed == other.breed  # Only compare breed

# Create instances
gromit = Dog("beagle", "brown")
gromit_v2 = Dog("beagle", "beige")

# Compare
print(gromit == gromit_v2)  # True (because only breed is compared)
```
### **🔹 Key Takeaway**
- By default, data classes **compare all attributes**.
- Overriding `__eq__` allows **custom comparison logic**.

---

## **📌 3. Using `default_factory` for Lists, Sets, and Dictionaries**
If an attribute should **start empty but be mutable**, use `default_factory`.

### **✅ Example**
```python
from dataclasses import field

@dataclass
class Employee:
    name: str
    role: str
    skills: list = field(default_factory=list)  # Start with an empty list

# Create an instance
mary = Employee("Mary", "Engineer")
print(mary)  # Employee(name='Mary', role='Engineer', skills=[])

# Add a skill
mary.skills.append("Cyber Security")
print(mary)  # Employee(name='Mary', role='Engineer', skills=['Cyber Security'])
```
### **🔹 Key Takeaway**
- **DO NOT** use `skills: list = []` (mutable default arguments).
- Instead, use **`default_factory=list`** to avoid unexpected behavior.

---

## **📌 4. Inheritance in Data Classes**
You can **inherit** from a data class just like a regular class.

### **✅ Example**
```python
@dataclass
class Animal:
    name: str
    species: str

@dataclass
class Cat(Animal):  # Inheriting from Animal
    lives: int = 9

# Create an instance
felix = Cat("Felix", "Siamese")
print(felix)  # Cat(name='Felix', species='Siamese', lives=9)
```
### **🔹 Key Takeaway**
- **Inheritance works the same as in regular classes.**
- Parent class attributes **are automatically included**.

---

## **📌 Summary Table**
| **Feature**         | **Description** |
|--------------------|----------------|
| **Methods** | Define functions inside data classes just like normal classes. |
| **Operator Overloading** | Override `__eq__` to define custom equality checks. |
| **Mutable Defaults** | Use `default_factory` to initialize lists, sets, or dicts. |
| **Inheritance** | Child data classes inherit attributes and methods from parents. |

These **advanced data class features** allow for **clean, structured, and efficient** data handling in Python! 🚀  
Try implementing them in your own projects!


# **Stop and Code: Practicing Data Classes in Python** 🚀

In this session, we’ll **apply** our knowledge of data classes through three coding exercises.

---

## **📝 Exercise 1: Camera Data Class**
Create a **Camera** data class with:
- `brand`: 📷 (string)
- `lens`: 🔍 (string)
- `shots_taken`: 🎞️ (integer, default = `0`)

### **✅ Solution**
```python
from dataclasses import dataclass

@dataclass
class Camera:
    brand: str
    lens: str
    shots_taken: int = 0  # Default value

# Create an instance
canon = Camera(brand="Canon", lens="50mm")
print(canon)  # Camera(brand='Canon', lens='50mm', shots_taken=0)

# Modify the shots taken
canon.shots_taken += 39
print(canon)  # Camera(brand='Canon', lens='50mm', shots_taken=39)
```
---

## **📝 Exercise 2: Climber Data Class**
Create a **Climber** data class with:
- `name`: 🧗 (string)
- `grades_climbed`: 📈 (set, default = empty set)

### **✅ Solution**
```python
from dataclasses import dataclass, field

@dataclass
class Climber:
    name: str
    grades_climbed: set = field(default_factory=set)  # Default set

# Create an instance
adam = Climber(name="Adam")
print(adam)  # Climber(name='Adam', grades_climbed=set())

# Add grades
adam.grades_climbed.add(5)
adam.grades_climbed.add(6)
adam.grades_climbed.add(1)
print(adam)  # Climber(name='Adam', grades_climbed={1, 5, 6})
```
---

## **📝 Exercise 3: Maximum Climbing Grade**
Create a method **show_max_grade()** to display the **highest climbing grade**.

### **✅ Solution**
```python
@dataclass
class Climber:
    name: str
    grades_climbed: set = field(default_factory=set)

    def show_max_grade(self):
        if self.grades_climbed:
            print(f"{self.name} has climbed a {max(self.grades_climbed)}.")
        else:
            print(f"{self.name} has not climbed any grades yet.")

# Create an instance and add grades
adam = Climber(name="Adam")
adam.show_max_grade()  # Adam has not climbed any grades yet.

adam.grades_climbed.update({1, 5, 6})
adam.show_max_grade()  # Adam has climbed a 6.
```
---

## **📌 Key Takeaways**
| **Concept**          | **Explanation** |
|----------------------|----------------|
| **Default Values**   | Use `shots_taken: int = 0` to provide defaults. |
| **Mutable Defaults** | Use `field(default_factory=set)` instead of `set()` to avoid mutable issues. |
| **Data Class Methods** | Methods like `show_max_grade()` provide **custom behaviors** for data classes. |
| **Handling Empty Sets** | Use **conditional checks** (`if self.grades_climbed`) to avoid errors. |

These exercises **reinforce** how **data classes** can **simplify object creation** while **maintaining flexibility**. 🚀  
Try modifying these examples to **add more features**!


# **Stop and Code Session: Data Classes** 📝

This session consists of **three challenges** to practice working with **data classes**, **default values**, and **methods**.

---

## **📌 1. Create a Camera Data Class**
### **🎯 Task**
Create a `Camera` data class with:
- `brand` (str)
- `lens` (str)
- `shots_taken` (int, default = `0`)

### **✅ Solution**
```python
from dataclasses import dataclass

@dataclass
class Camera:
    brand: str
    lens: str
    shots_taken: int = 0  # Default value set to 0

# Create an instance
canon = Camera("Canon", "50mm")

# Print to verify
print(canon)  # Camera(brand='Canon', lens='50mm', shots_taken=0)

# Update shots taken
canon.shots_taken += 39
print(canon)  # Camera(brand='Canon', lens='50mm', shots_taken=39)
```
### **🔹 Key Takeaway**
- **Use default values** for attributes that should start with a specific value (e.g., `shots_taken = 0`).
- Data classes automatically provide a **clean print format**.

---

## **📌 2. Create a Climber Data Class with a Default Factory**
### **🎯 Task**
Create a `Climber` data class with:
- `name` (str)
- `grades_climbed` (set, default = **empty set** using `default_factory`).

### **✅ Solution**
```python
from dataclasses import dataclass, field

@dataclass
class Climber:
    name: str
    grades_climbed: set = field(default_factory=set)  # Default empty set

# Create an instance
adam = Climber("Adam")

# Print to verify
print(adam)  # Climber(name='Adam', grades_climbed=set())
```
### **🔹 Key Takeaway**
- **Use `field(default_factory=set)`** instead of `grades_climbed = {}` to prevent **mutable default issues**.

---

## **📌 3. Add a Method to Show Max Climbed Grade**
### **🎯 Task**
Modify `Climber` to:
1. **Allow adding grades**
2. **Define a method `show_max_grade()`** that prints the highest climbed grade.
3. **Handle cases where no grades have been climbed**.

### **✅ Solution**
```python
@dataclass
class Climber:
    name: str
    grades_climbed: set = field(default_factory=set)

    def show_max_grade(self):
        if self.grades_climbed:
            print(f"{self.name} has climbed a {max(self.grades_climbed)}!")
        else:
            print(f"{self.name} has not climbed any grades yet.")

# Create an instance
adam = Climber("Adam")

# Add grades
adam.grades_climbed.add(5)
adam.grades_climbed.add(6)
adam.grades_climbed.add(1)

# Print max grade
adam.show_max_grade()  # Adam has climbed a 6!

# Test empty grades case
new_climber = Climber("Sarah")
new_climber.show_max_grade()  # Sarah has not climbed any grades yet.
```
### **🔹 Key Takeaway**
- **Handle empty sets** before calling `max()` to avoid errors.
- **Methods work the same as in regular classes**.

---

## **📌 Summary Table**
| **Feature**         | **Description** |
|--------------------|----------------|
| **Default Values** | Use `attribute: type = default_value` (e.g., `shots_taken: int = 0`). |
| **Mutable Defaults** | Use `field(default_factory=type)` to avoid shared mutable defaults. |
| **Methods** | Define functions inside data classes just like normal classes. |
| **Error Handling** | Always check before using `max()` on empty collections. |

These challenges covered **default values, methods, and data class best practices**! Try applying them in real projects!


# **Understanding Data Classes in Python**

Data classes, introduced in **Python 3.7**, provide a way to define **data-centric classes** with **minimal boilerplate code**. They **automatically generate** common methods like `__init__`, `__repr__`, and `__eq__`, making code **cleaner and more readable**.

---

## **📌 What Are Data Classes?**
A **data class** is a class **designed for storing data**. Instead of manually writing methods like `__init__` and `__repr__`, Python **automatically generates them** using the `@dataclass` decorator.

### **✅ Basic Example**
```python
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

point1 = Point(10, 20)
print(point1)  # Output: Point(x=10, y=20)
```
### **🔹 Key Features**
- The `@dataclass` **automatically generates**:
  - `__init__`: Handles initialization.
  - `__repr__`: Provides a string representation.
  - `__eq__`: Compares instances **based on attributes**.

---

## **📌 Features and Benefits of Data Classes**
### **1️⃣ Automatic Method Generation**
- `__init__`, `__repr__`, and `__eq__` are automatically created.
- Saves time and reduces human error.

### **2️⃣ Type Annotations for Readability**
- Data classes use **type hints** to improve code clarity.

### **3️⃣ Default Values**
```python
@dataclass
class Point:
    x: int = 0
    y: int = 0

point2 = Point()
print(point2)  # Output: Point(x=0, y=0)
```
### **4️⃣ Immutability**
- You can make a data class **immutable** with `frozen=True`.

```python
@dataclass(frozen=True)
class Point:
    x: int
    y: int

point3 = Point(5, 10)
# point3.x = 20  # ❌ Raises an error!
```
### **5️⃣ Field Customization**
- Use `field()` to customize attributes.

```python
from dataclasses import field

@dataclass
class Point:
    x: int
    y: int = field(default=0, compare=False)  # y is ignored in comparisons

point4 = Point(10, 20)
point5 = Point(10, 30)
print(point4 == point5)  # True (y is ignored)
```
---

## **📌 Comparing Data Classes to Regular Classes**
A **traditional class** with the same functionality:

```python
class Point:
    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Point(x={self.x}, y={self.y})"

    def __eq__(self, other):
        if isinstance(other, Point):
            return self.x == other.x and self.y == other.y
        return False

point1 = Point(10, 20)
point2 = Point(10, 20)
print(point1)           # Point(x=10, y=20)
print(point1 == point2) # True
```
### **🔹 Why Choose Data Classes?**
| Feature            | Traditional Class | Data Class |
|--------------------|------------------|------------|
| **Boilerplate Code** | ✗ Needs manual `__init__`, `__repr__`, `__eq__` | ✅ Automatically generated |
| **Readability**    | ✗ More complex | ✅ Cleaner & concise |
| **Customization**  | ✅ Full control | ✅ Customization with `field()` |

---

## **📌 Advanced Features**
### **1️⃣ Post-Initialization Processing (`__post_init__`)**
- Used for **extra processing after object creation**.

```python
from dataclasses import dataclass, field

@dataclass
class Rectangle:
    width: int
    height: int
    area: int = field(init=False)  # Excluded from init

    def __post_init__(self):
        self.area = self.width * self.height  # Compute area

rect = Rectangle(10, 20)
print(rect.area)  # 200
```
---

### **2️⃣ Inheritance with Data Classes**
```python
@dataclass
class Shape:
    color: str

@dataclass
class Circle(Shape):
    radius: int

circle = Circle("red", 10)
print(circle)  # Circle(color='red', radius=10)
```
### **🔹 Explanation**
- `Circle` **inherits** from `Shape`, meaning it gets the `color` attribute **automatically**.

---

### **3️⃣ Excluding Fields from Methods**
- Exclude fields from `__repr__`, `__eq__`, or `__hash__`.

```python
@dataclass
class Employee:
    name: str
    age: int = field(repr=False)  # Age won't be shown in print

employee = Employee("Alice", 30)
print(employee)  # Output: Employee(name='Alice')
```
---

## **📌 When to Use Data Classes?**
| **Use Data Classes When…** | **Avoid Data Classes When…** |
|----------------------------|-----------------------------|
| You **store data** only. | Complex behavior is needed. |
| You want **less boilerplate**. | You need **fine-grained control**. |
| You need **readable & structured data**. | Performance overhead is a concern. |

---

## **📌 Conclusion**
✅ **Data classes** are perfect for **data storage, improving readability, and reducing boilerplate code**.  
✅ They **automatically handle common methods** like `__init__`, `__repr__`, and `__eq__`.  
✅ Use them when defining **simple, structured data objects** but **prefer traditional classes** for complex logic.  

**🔹 TL;DR:** If your class is **just a collection of attributes**, use a **data class**!

# **Understanding Abstract Classes in Python**

## **1. What Are Abstract Classes?**
Abstract classes, also known as **abstract base classes (ABCs)**, are special types of classes that **define a blueprint** for other classes. They allow you to enforce a structure by requiring subclasses to implement specific methods. Abstract classes are useful when working with **large codebases** and **complex systems** to ensure that related classes follow a common pattern.

---

## **2. Why Use Abstract Classes?**
Imagine a **car manufacturing plant** where every car must have:
✅ A **chassis**  
✅ An **engine**  
✅ **Four wheels**  

We don’t care about the **exact type** of engine or chassis, but every car **must** have these components.

Similarly, in Python, abstract classes define **rules** for subclasses. If a class **inherits from an abstract class but does not implement the required methods, Python raises an error**.

💡 **Analogy:**  
- Abstract class **defines the blueprint** (like the car factory rule: every car must have an engine).
- Subclasses **must implement** required methods (like ensuring every new car model follows the factory rules).

---

## **3. Creating an Abstract Class in Python**
To define an abstract class, Python provides the `ABC` module (`Abstract Base Class`).

### **3.1 Basic Example of Abstract Class**
```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        """Every subclass must implement this method"""
        pass

class Dog(Animal):
    def make_sound(self):
        return "Woof!"

class Cat(Animal):
    def make_sound(self):
        return "Meow!"

dog = Dog()
cat = Cat()

print(dog.make_sound())  # Output: Woof!
print(cat.make_sound())  # Output: Meow!
```
### **3.2 Explanation**
- `Animal` is an **abstract class** that inherits from `ABC` (Abstract Base Class).
- `@abstractmethod` **forces subclasses to implement `make_sound()`**.
- `Dog` and `Cat` **must implement** `make_sound()`, otherwise Python will raise a `TypeError`.

---

## **4. What Happens If a Subclass Does Not Implement the Abstract Method?**
```python
class Bird(Animal):
    pass  # Missing implementation of make_sound()

bird = Bird()  # ❌ TypeError: Can't instantiate abstract class Bird
```
💡 **Key Rule:**  
**Any subclass that inherits from an abstract class must implement all `@abstractmethod` methods, or Python will raise an error.**

---

## **5. Providing Default Implementations**
Not all methods need to be enforced. We can provide **default implementations** in the abstract class while keeping some methods abstract.

```python
class Machine(ABC):
    @abstractmethod
    def start(self):
        pass  # Must be implemented by subclasses

    def stop(self):
        return "Machine stopped"  # Default implementation

class WashingMachine(Machine):
    def start(self):
        return "Washing machine started"

# Creating an instance
wm = WashingMachine()
print(wm.start())  # Output: Washing machine started
print(wm.stop())   # Output: Machine stopped
```
### **5.1 Explanation**
- **`start()`** is an **abstract method**, so `WashingMachine` **must** implement it.
- **`stop()`** has a **default implementation**, so subclasses **can use or override it**.

---

## **6. Abstract Classes vs. Interfaces**
Abstract classes in Python work similarly to **interfaces** in other programming languages (like Java or C#). However:
- **Python allows abstract classes to have implemented methods**, whereas traditional interfaces do not.
- Abstract classes can **enforce method implementation** while providing shared logic.

### **6.1 When to Use Abstract Classes**
✅ You need a **common structure** that all subclasses must follow.  
✅ You want to enforce **specific methods** in all child classes.  
✅ You also want to provide some **default implementations**.

---

## **7. Summary**
| Feature           | Abstract Class |
|------------------|---------------|
| **Purpose** | Defines a common interface for related classes |
| **Can Have Methods?** | ✅ Yes, both abstract and regular methods |
| **Forces Implementation?** | ✅ Yes, for methods marked `@abstractmethod` |
| **Instantiation** | ❌ Cannot create an instance of an abstract class |
| **Flexibility** | ✅ Can provide default behavior and required methods |

By using abstract classes, we ensure that our code is **consistent, structured, and maintainable** while allowing flexibility in subclass implementations.

# **Implementing Abstract Classes in Python (VS Code Walkthrough)**

In this session, we’ll go through a **practical example of creating and using abstract classes** in Python. We’ll define an abstract base class (**ABC**) and implement it in concrete subclasses, enforcing structure and consistency across different file movers.

---

## **1. Setting Up the Abstract Class**
First, we need to **import the necessary components** from the built-in `abc` module:

```python
from abc import ABC, abstractmethod
```
Next, we define an **abstract base class (`FileMover`)**, which will serve as the **blueprint** for all file mover classes. Every file mover class should have two methods:
- `check_file_exists()`
- `file_move()`

```python
class FileMover(ABC):
    """Abstract Base Class for file movers"""

    @abstractmethod
    def check_file_exists(self):
        """Abstract method to ensure all subclasses implement this"""
        pass

    @abstractmethod
    def file_move(self):
        """Abstract method to enforce file-moving logic in subclasses"""
        pass
```
### **1.1 Explanation**
✅ **`FileMover(ABC)`** → Inheriting from `ABC` makes this an **abstract class**.  
✅ **`@abstractmethod`** → Methods marked as `@abstractmethod` must be **implemented in all subclasses**.  
✅ **No `__init__` method** → Abstract classes usually don’t need initialization since they **only define rules**.  

---

## **2. Creating Concrete Subclasses**
Now, let's define two **subclasses that inherit from `FileMover`**:
- `CSVFileMover`
- `ExcelFileMover`

Each class **must** implement the required methods, or Python will raise an error.

```python
class CSVFileMover(FileMover):
    """Handles moving CSV files"""

    def check_file_exists(self):
        print("Checking if CSV file exists...")

    def file_move(self):
        print("Moving a CSV file...")

class ExcelFileMover(FileMover):
    """Handles moving Excel files"""

    def check_file_exists(self):
        print("Checking if Excel file exists...")

    def file_move(self):
        print("Moving an Excel file...")
```
### **2.1 Explanation**
✅ Both classes **inherit** from `FileMover`.  
✅ They **implement `check_file_exists()` and `file_move()`**, fulfilling the abstract class’s requirements.  
✅ **If a method is missing, Python will raise a `TypeError`**.  

---

## **3. Testing the Implementation**
Now, let’s create instances and call the methods:

```python
# Creating instances of concrete subclasses
csv_mover = CSVFileMover()
excel_mover = ExcelFileMover()

# Calling required methods
csv_mover.check_file_exists()
csv_mover.file_move()

excel_mover.check_file_exists()
excel_mover.file_move()

### **Expected Output**
Checking if CSV file exists... Moving a CSV file... Checking if Excel file exists... Moving an Excel file...
```

✅ **Python doesn’t raise errors** because we’ve correctly implemented all abstract methods.  

---

## **4. What Happens If a Subclass Doesn’t Implement Required Methods?**
If we try to instantiate a subclass **without implementing all abstract methods**, Python will raise an error.

```python
class IncompleteMover(FileMover):
    pass  # No methods implemented
```
# Attempting to create an instance
incomplete = IncompleteMover()  # ❌ TypeError

### **Error Message**
TypeError: Can't instantiate abstract class IncompleteMover with abstract methods check_file_exists, file_move


💡 **Takeaway:** Subclasses **must** implement all `@abstractmethod` methods, or Python **won’t allow instantiation**.

---

## **5. Using Abstract Classes as Regular Superclasses**
Abstract classes **can also contain normal (non-abstract) methods**, acting as a **regular superclass**.

```python
class FileMover(ABC):
    """Abstract Base Class for file movers"""

    @abstractmethod
    def check_file_exists(self):
        pass

    @abstractmethod
    def file_move(self):
        pass

    def log_action(self):
        print("Logging file move operation...")  # Regular method

class CSVFileMover(FileMover):
    def check_file_exists(self):
        print("Checking if CSV file exists...")

    def file_move(self):
        print("Moving a CSV file...")

csv_mover = CSVFileMover()
csv_mover.log_action()  # ✅ Works fine!
```
### **5.1 Explanation**
✅ **Abstract classes can contain regular methods.**  
✅ **Subclasses inherit these methods** and can use them as normal.  

---

## **6. Abstract Properties, Class Methods, and Static Methods**
Abstract classes also support **properties**, **class methods**, and **static methods**.

### **6.1 Abstract Property**
```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @property
    @abstractmethod
    def area(self):
        """All shapes must define an area property"""
        pass

class Square(Shape):
    def __init__(self, side):
        self._side = side

    @property
    def area(self):
        return self._side ** 2  # Implementing the required property

square = Square(4)
print(square.area)  # ✅ Works! Output: 16
```
---

### **6.2 Abstract Class Method**
```python
class Animal(ABC):
    @classmethod
    @abstractmethod
    def make_sound(cls):
        pass

class Dog(Animal):
    @classmethod
    def make_sound(cls):
        return "Woof!"

print(Dog.make_sound())  # ✅ Works! Output: "Woof!"
```
---

### **6.3 Abstract Static Method**
```python
class MathOperations(ABC):
    @staticmethod
    @abstractmethod
    def add(a, b):
        pass

class SimpleMath(MathOperations):
    @staticmethod
    def add(a, b):
        return a + b

print(SimpleMath.add(5, 3))  # ✅ Works! Output: 8
```
---

## **7. Summary: Key Takeaways**
| Feature            | Abstract Class (`ABC`) |
|--------------------|----------------------|
| **Purpose**       | Define a blueprint for related classes |
| **Can Have Methods?** | ✅ Yes, both abstract and regular methods |
| **Forces Implementation?** | ✅ Yes, for methods marked with `@abstractmethod` |
| **Can Have Properties?** | ✅ Yes, with `@property` |
| **Supports Class/Static Methods?** | ✅ Yes, with `@classmethod` and `@staticmethod` |
| **Can Be Instantiated?** | ❌ No, only subclasses can be instantiated |

### **When to Use Abstract Classes?**
✔ When you want to **enforce a structure** in all subclasses.  
✔ When multiple related classes **must** implement the same methods.  
✔ When designing a **large system** with reusable components.

By using **abstract base classes**, we create **consistent, maintainable, and scalable** Python programs. 🚀

# **Understanding Enums in Python**

Enums (**enumerations**) provide a **structured way to define a fixed set of values** in a class. They are useful for representing **constant values** such as **days of the week, months, traffic lights, HTTP status codes,** and more. 

## **1. What is an Enum?**
An `Enum` is a class that consists of **named constant values**, making code more readable and reducing the risk of using arbitrary values.

✅ **Why use Enums?**
- Provides **named constants** instead of magic numbers.
- Improves **code readability** and maintainability.
- Ensures **data integrity** by preventing invalid values.

---

## **2. Defining an Enum in Python**
To use `Enum`, we **import** it from Python’s built-in `enum` module.

### **Example: Days of the Week**
```python
from enum import Enum

class Weekday(Enum):
    MONDAY = 1
    TUESDAY = 2
    WEDNESDAY = 3
    THURSDAY = 4
    FRIDAY = 5
    SATURDAY = 6
    SUNDAY = 7

# Using the Enum
day = Weekday.MONDAY
print(day)        # Output: Weekday.MONDAY
print(day.name)   # Output: MONDAY
print(day.value)  # Output: 1
```
---

## **3. Practical Use Case: Traffic Light System**
Let’s define a traffic light system where each **color** is assigned a **numeric value**.

```python
from enum import Enum

class TrafficLight(Enum):
    RED = 1
    ORANGE = 2
    GREEN = 3

# Accessing Enum members
red_light = TrafficLight.RED
print(red_light.name)   # Output: RED
print(red_light.value)  # Output: 1
```
---

## **4. Implementing Methods in an Enum**
Enums **can have methods** to provide additional functionality. Let's create a method that **returns the next traffic light color** in sequence.

```python
from enum import Enum

class TrafficLight(Enum):
    RED = 1
    ORANGE = 2
    GREEN = 3

    def next_light(current_light):
        """Returns the next traffic light in sequence"""
        if current_light == TrafficLight.RED:
            return TrafficLight.GREEN
        elif current_light == TrafficLight.GREEN:
            return TrafficLight.ORANGE
        elif current_light == TrafficLight.ORANGE:
            return TrafficLight.RED

# Testing the next_light method
current = TrafficLight.RED
next_color = TrafficLight.next_light(current)
print(next_color)  # Output: TrafficLight.GREEN
```
---

## **5. Creating Enums with Custom Methods**
You can also **extend Enums with custom methods** to add more logic.

```python
class Status(Enum):
    SUCCESS = 200
    NOT_FOUND = 404
    SERVER_ERROR = 500

    def is_error(self):
        """Returns True if status code represents an error"""
        return self.value >= 400

# Checking error status
print(Status.SUCCESS.is_error())     # Output: False
print(Status.SERVER_ERROR.is_error()) # Output: True
```
---

## **6. Iterating Over Enum Members**
You can loop through all **Enum members** using a `for` loop.

```python
for light in TrafficLight:
    print(light.name, "=", light.value)

### **Output:**
RED = 1 ORANGE = 2 GREEN = 3
```
---

## **7. Enums vs Dictionaries**
While **dictionaries** also map keys to values, **Enums are more structured and prevent accidental modifications**.

**Dictionary Approach:**
```python
traffic_light_dict = {
    "RED": 1,
    "ORANGE": 2,
    "GREEN": 3
}
print(traffic_light_dict["RED"])  # ✅ Works, but allows arbitrary changes.
```
**Enum Approach (Safer):**
```python
light = TrafficLight.RED
print(light.value)  # ✅ Safer: Prevents accidental modifications.
```
---

## **8. Enum with Auto-Generated Values**
Python provides `auto()` to **automatically assign values**.

```python
from enum import Enum, auto

class Color(Enum):
    RED = auto()
    BLUE = auto()
    GREEN = auto()

print(Color.RED.value)  # Output: 1
print(Color.BLUE.value) # Output: 2
print(Color.GREEN.value) # Output: 3
```
---

## **9. Summary: Why Use Enums?**
| Feature        | Enum |
|---------------|------|
| **Readability** | ✅ Improves readability with named constants. |
| **Data Integrity** | ✅ Prevents invalid values from being assigned. |
| **Fixed Values** | ✅ Ensures predefined values are used. |
| **Iteration** | ✅ Can loop through enum members easily. |
| **Safety** | ✅ Prevents accidental changes compared to dictionaries. |

### **When to Use Enums?**
✔ When you have a **fixed set of values** (e.g., days of the week, traffic lights).  
✔ When you want **self-documenting code**.  
✔ When you need **safe and structured constants**.

Using Enums makes your code **cleaner, safer, and easier to maintain**.


# 🚀 Understanding `__slots__` in Python

## 🔍 What is `__slots__`?
In **Python**, classes typically allow **dynamic attribute creation**, meaning you can add attributes to an instance at any time. However, **sometimes you might want to restrict this behavior**, ensuring that only a predefined set of attributes is allowed.

This is where **`__slots__`** comes in—it **limits the attributes an instance can have**, preventing accidental additions and optimizing memory usage.

---

## **Why Use `__slots__`?**
✔ **Reduces memory usage** by removing the per-instance `__dict__`.  
✔ **Prevents accidental attribute creation**, enforcing a strict attribute schema.  
✔ **Slightly improves performance** (attribute access is faster).  

**Limitations**:  
- Cannot dynamically add attributes.  
- Not compatible with multiple inheritance (unless all parents use `__slots__`).  
- Removes the instance dictionary (`__dict__`), so `vars(instance)` no longer works.

---

## **Basic Example: Car Class Without `__slots__`**
By default, Python allows you to add attributes dynamically:

```python
class Car:
    def __init__(self, color, make, model):
        self.color = color
        self.make = make
        self.model = model

# Creating an instance
car_a = Car("Red", "GMC", "NiceOne")

# Checking attributes
print(vars(car_a))  # ✅ {'color': 'Red', 'make': 'GMC', 'model': 'NiceOne'}

# Adding a new attribute dynamically
car_a.seats = 5
print(vars(car_a))  # ✅ {'color': 'Red', 'make': 'GMC', 'model': 'NiceOne', 'seats': 5}
```
---

## **Restricting Attributes with `__slots__`**
Now, let's enforce a fixed set of attributes using `__slots__`.

```python
class Car:
    __slots__ = ["color", "make", "model"]  # Allowed attributes

    def __init__(self, color, make, model):
        self.color = color
        self.make = make
        self.model = model

# Creating an instance
car_b = Car("Blue", "Ford", "Mustang")

# Accessing defined attributes
print(car_b.color)  # ✅ Output: Blue

# Attempting to add a new attribute
car_b.seats = 5  # ❌ AttributeError: 'Car' object has no attribute 'seats'
```
---

## **Important Caveat: `vars(instance)` No Longer Works**
Since `__slots__` removes the instance dictionary (`__dict__`), trying to inspect attributes using `vars()` will fail:

```python
print(vars(car_b))  # ❌ TypeError: vars() argument must have __dict__ attribute
```
---

## **When to Use `__slots__`?**
✔ When creating **many instances** (e.g., millions of objects) to save memory.  
✔ When you want to **enforce a strict attribute schema**.  
✔ When optimizing **performance in attribute access**.  
Avoid using `__slots__` when:
- You need **dynamic attributes**.
- The class needs **multiple inheritance** (unless all parents use `__slots__`).
- You require **instance dictionaries (`__dict__`) for introspection**.

---

## ✅ **Final Thoughts**
- `__slots__` is a **powerful tool for memory optimization**.
- It **prevents unnecessary attributes** and **reduces object overhead**.
- However, **it’s not always necessary**—use it when memory constraints or attribute control are a priority.

---

# **Understanding Multiple Inheritance in Python**

## **1. What is Multiple Inheritance?**
Multiple inheritance allows a class to inherit **attributes and methods from more than one parent class**. While it can be useful in some cases, it introduces complexity due to **method resolution order (MRO)**, which determines which method to call when multiple parent classes define the same method.

**When to Use Multiple Inheritance?**
- When an object logically belongs to **multiple categories**.
- When **sharing behavior from multiple sources** (e.g., a class that needs methods from two separate classes).

**When to Avoid It?**
- When it **complicates the code** and makes debugging difficult.
- If **composition** (having objects inside objects) would be a cleaner solution.

---

## **2. Basic Example of Multiple Inheritance**
Let's define a `Person` class and a `Londoner` class, and then create a `LondonPerson` class that inherits from both.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        return f"I am {self.name}, {self.age} years old."

class Londoner:
    def __init__(self, area):
        self.area = area

    def say_hello(self):
        return f"I live in {self.area}."

# Multiple Inheritance
class LondonPerson(Person, Londoner):
    def __init__(self, name, age, area):
        # Call the first parent (Person) using super()
        super().__init__(name, age)
        
        # Call the second parent (Londoner) manually
        Londoner.__init__(self, area)

# Creating an instance
john = LondonPerson("John", 78, "Chelsea")

print(john.say_hello())  # ??? Which one will be used?
```
---

## **3. Understanding Method Resolution Order (MRO)**
Python determines which method to call using **MRO (Method Resolution Order)**.

To check the MRO of a class:
```python
print(LondonPerson.__mro__)
```
**Output:**
(<class 'main.LondonPerson'>, <class 'main.Person'>, <class 'main.Londoner'>, <class 'object'>)

🔹 **How MRO works:**
1. Python first checks `LondonPerson`.
2. If the method isn’t found, it checks `Person` (first listed parent).
3. If it’s not in `Person`, it checks `Londoner`.
4. If it’s still not found, it checks the base `object` class.

---

## **4. How to Control MRO in Multiple Inheritance**
If both `Person` and `Londoner` have a method called `say_hello()`, **which one is called?**

```python
john = LondonPerson("John", 78, "Chelsea")
print(john.say_hello())  # Output: "I am John, 78 years old."
```
**Why?**
- Since `Person` comes **first** in `LondonPerson(Person, Londoner)`, Python picks `say_hello()` from `Person` before checking `Londoner`.

---

## **5. What If We Want to Use Londoner’s Method Instead?**
We can **override** `say_hello()` in `LondonPerson`:

```python
class LondonPerson(Person, Londoner):
    def __init__(self, name, age, area):
        super().__init__(name, age)
        Londoner.__init__(self, area)

    def say_hello(self):
        return Londoner.say_hello(self)

# Now, calling say_hello() will use the Londoner version
john = LondonPerson("John", 78, "Chelsea")
print(john.say_hello())  # Output: "I live in Chelsea."
```
---

## **6. Overriding Methods in Multiple Inheritance**
If the subclass defines its own method, **it takes priority** over inherited methods.

```python
class LondonPerson(Person, Londoner):
    def __init__(self, name, age, area):
        super().__init__(name, age)
        Londoner.__init__(self, area)

    def say_hello(self):
        return "Hey, I'm a Londoner!"

john = LondonPerson("John", 78, "Chelsea")
print(john.say_hello())  # Output: "Hey, I'm a Londoner!"
```
---

## **7. Summary: Key Takeaways**
| Feature               | Multiple Inheritance |
|-----------------------|----------------------|
| **MRO Order**        | First searches the subclass, then the first parent, then the second parent. |
| **Conflicting Methods** | Uses the first parent’s method unless overridden. |
| **Flexibility**       | Allows combining behaviors from multiple classes. |
| **Complexity**        | Can lead to hard-to-debug issues with deep inheritance trees. |

### **Alternatives to Multiple Inheritance**
✔ **Composition (Has-A relationship)**  
✔ **Mixins (Lightweight Parent Classes for Additional Functionality)**  

**Best Practice:**  
Only use multiple inheritance **when truly necessary**—it’s powerful but can make debugging harder.


# **Understanding Descriptors in Python**

## **1. What Are Descriptors?**
Descriptors are **powerful tools in Python** that allow you to control how attributes are **retrieved, set, and deleted** in a class. They provide **granular control** over attributes and allow **reusable behavior across multiple classes**.

**Why Use Descriptors Instead of Properties?**
- **Properties (@property)**: Defined within a **single class** and tied to that class.
- **Descriptors**: Can be **reused across multiple classes** without requiring inheritance.

**Best Use Cases for Descriptors:**
- Enforcing **read-only attributes** (e.g., constants).
- Adding **custom validation logic** when setting attributes.
- Logging, caching, or computed values.

---

## **2. Defining a Descriptor**
A descriptor class must implement one or more of these special methods:
- `__get__(self, instance, owner)`: Controls **attribute retrieval**.
- `__set__(self, instance, value)`: Controls **attribute assignment**.
- `__delete__(self, instance)`: Controls **attribute deletion**.

### **Example: Read-Only Attribute Descriptor**
```python
class ReadOnlyValue:
    def __init__(self, value):
        self.value = value

    def __get__(self, instance, owner):
        return self.value

    def __set__(self, instance, value):
        raise ValueError(f"This attribute is read-only. You provided '{value}'")

# Using the descriptor in another class
class SomeClass:
    my_value = ReadOnlyValue(1234)

# Testing the behavior
x = SomeClass()
print(x.my_value)  # ✅ Output: 1234

x.my_value = 5678  # ❌ Raises: ValueError: This attribute is read-only.
```
---

## **3. Understanding Parameters in `__get__` and `__set__`**
- **`instance`**: The object that accessed the descriptor.
- **`owner`**: The class that owns the descriptor.
- **`value`** (for `__set__` only): The value being assigned.

Example:
```python
def __get_"Instance: {instance}, Owner: {owner}")
    retur_(self, instance, owner):
    print(fn self.value

x = SomeClass()
print(x.my_value)
# Output: Instance: <SomeClass object>, Owner: <class '__main__.SomeClass'>
```
---

## **4. Creating a Custom Exception for Better Errors**
Instead of using generic `ValueError`, we can create a **custom exception**.

```python
class ReadOnlyError(Exception):
    """Raised when a read-only attribute is modified."""
    pass

class ReadOnlyValue:
    def __init__(self, value):
        self.value = value

    def __set__(self, instance, value):
        raise ReadOnlyError(f"This attribute cannot be modified. You tried to set '{value}'.")
```
# Now attempting to modify the value will raise a ReadOnlyError instead of ValueError.

---

## **5. Extending Descriptors for More Control**
Descriptors can enforce **custom logic**, such as **data validation**.

### **Example: Enforcing Positive Values**
```python
class PositiveValue:
    def __init__(self, default):
        self.value = default

    def __get__(self, instance, owner):
        return self.value

    def __set__(self, instance, value):
        if value < 0:
            raise ValueError("Value must be positive.")
        self.value = value

# Using it in a class
class BankAccount:
    balance = PositiveValue(100)

# Testing the behavior
account = BankAccount()
print(account.balance)  # ✅ Output: 100

account.balance = -50   # ❌ Raises: ValueError: Value must be positive.
```
---

## **6. Difference Between Descriptors and Properties**
| Feature            | Descriptors | Properties (@property) |
|--------------------|------------|-------------------------|
| **Code Reuse**    | Can be reused across multiple classes | Tied to a specific class |
| **Encapsulation** | Better separation of concerns | Defined within the class |
| **Flexibility**   | Can implement multiple behaviors at once | Only affects the class it's in |

**Best Practice**:
- Use **properties** if the behavior is **only needed for one class**.
- Use **descriptors** when you **need reusable control** across multiple classes.

---

## **7. Key Takeaways**
✔ Descriptors provide **granular control** over attributes.  
✔ They are **reusable**, making them more flexible than properties.  
✔ Use `__get__`, `__set__`, and `__delete__` for full attribute control.  
✔ If an attribute should **never be modified**, use a **custom exception**.  
✔ Descriptors can **enforce validation rules** like ensuring positive values.  
**When to Use?**
- When a class **requires shared attribute behavior** across multiple classes.
- When **validating or restricting** attribute modification.
- When creating **read-only constants**.

**Pro Tip:** Descriptors are used internally in Python for things like **staticmethods, classmethods, and properties**!

---
