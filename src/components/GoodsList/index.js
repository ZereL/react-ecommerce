import React, { Component } from "react";
import { connect } from "react-redux";
import { selectGoods } from "../../actions";

class GoodsList extends Component {
  renderList() {
    return this.props.goods.map((item, index) => {
      return (
        <div className="item" key={item.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                this.props.selectGoods(item);
              }}
            >
              select
            </button>
          </div>
          <div className="content">{item.title}</div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    goods: state.goods
  };
};

export default connect(
  mapStateToProps,
  {
    selectGoods
  }
)(GoodsList);
