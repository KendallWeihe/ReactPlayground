
# some scratch work
- (as I see it) React components are meant to model html abstractions 
    - ...in a more programmer-friendly way IMO
- I was to push any of the data logic onto the NodeJS server
- the React end of the project is only meant to retrieve data from the server, show it to the user, and allow the user to manipulate said data

# The Model:

- **general functions:**
    - Save()
- `Edit`
    - *purpose:* this encompasses the full edit page
    - two side by side `MenuItemList`'s
    - each with a title
    - each with a brief description
    - each with filter & search options
    - **properties:**
        - ...
    - **functions:**
        - OnDragEnd 
            - either reorder list
            - or move from list to list
- `MenuItemList`
    - *purpose:* contain a responsive, sortable, editable list of `MenuItem`'s
    - scrollable
    - sortable
    - able to drag and drop from one list to another
    - "Add new menu item" to list
    - **properties:**
        - ...
    - **functions:**
        - GetItems()
            - queries the server for the menu list info
        - Order()
- `MenuItem`
    - *purpose:* atomic element that encompasses a generic menu item
    - delete button
    - edit button
        - launches an `EditMenuItem` pop-up page
    - nullable attributes that describe the menu item
    - **properties:**
        - `MenuItemProperties`
    - **functions:**
        - Edit()
        - Save()
- `EditMenuItem`




