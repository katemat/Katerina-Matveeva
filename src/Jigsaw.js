import React, { Component } from "react";
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc";
import "./Jigsaw.css";

const SortableItem = SortableElement(({ value }) => (
  <img className="sqr-img" src={value} />
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div className="list-img">
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </div>
  );
});

class SortableComponent extends React.Component {
  state = {
    items: [
      "/images/pic_08.jpg",
      "/images/pic_01.jpg",
      "/images/pic_07.jpg",
      "/images/pic_03.jpg",
      "/images/pic_09.jpg",
      "/images/pic_02.jpg",
      "/images/pic_05.jpg",
      "/images/pic_04.jpg",
      "/images/pic_06.jpg",
    ],
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  shuffle(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = tmp;
    }

    return shuffled;
  }

  handleShuffle = () => {
    console.log(this.state.items);
    this.setState(({ items }) => ({ items: this.shuffle(items) }));
    console.log(this.state.items);
  };
  handleAutoSolve = () => {
    this.setState(() => ({
      items: [
        "/images/pic_01.jpg",
        "/images/pic_02.jpg",
        "/images/pic_03.jpg",
        "/images/pic_04.jpg",
        "/images/pic_05.jpg",
        "/images/pic_06.jpg",
        "/images/pic_07.jpg",
        "/images/pic_08.jpg",
        "/images/pic_09.jpg",
      ],
    }));
  };
  render() {
    return (
      <div>
        <h2>Take a break! Try to solve Jigsaw Puzzle. Have Fun!</h2>
        <div className="jigsaw-puzzle">
          <div className="imgList">
            <SortableList
              items={this.state.items}
              axis="xy"
              onSortEnd={this.onSortEnd}
            />
          </div>
          <div className="original-img">
            <span>
              <strong>original image</strong>
            </span>
            <img
              className="small-img"
              src="/lauren-mancke-aOC7TSLb1o8-unsplash.jpg"
              size="800"
            />
            <div className="btn-wrapper">
              <button className="auto-btn" onClick={this.handleAutoSolve}>
                Solve for Me
              </button>
              <button className="shuffle-btn" onClick={this.handleShuffle}>
                Shuffle
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SortableComponent;
