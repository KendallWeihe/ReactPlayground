import React, { Component } from 'react';
import './App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.list = [
      {
        id: "123",
        name: "pick list a",
        children: [
          {
            id: "456",
            name: "item a1"
          },
          {
            id: "789",
            name: "item a2"
          }
        ]
      },
      {
        id: "987",
        name: "pick list b",
        children: [
          {
            id: "654",
            name: "item b1"
          },
          {
            id: "321",
            name: "item b2"
          }
        ]
      }
    ];
  }

  getList = id => {
    this.list.map((item) => {
      if (item.id == id)
      {
        return item;
      }
    })
  }

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
        return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.list.find(x => x.id === source.droppableId).children,
        source.index,
        destination.index
      );
    } else {
      const result = move(
        this.list.find(x => x.id === source.droppableId).children,
        this.list.find(x => x.id === destination.droppableId).children,
        source,
        destination
      );
    }
  };

  render() {
    const data = this.list;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      {
        data.map((list) => {
          return <Droppable droppableId={list.id}>
            {(provided, snapshot) => (
              <div ref={provided.innerRef}>
                {
                  list.children.map((item, itemIndex) => {
                    return <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={itemIndex}>
                      {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            {item.name}
                        </div>
                      )}
                    </Draggable>
                  })
                }
              {provided.placeholder}
              </div>
            )}
          </Droppable>
        })
      }
      </DragDropContext>
    );
  };
}




export default App;
