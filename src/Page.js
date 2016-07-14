import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
import { Container, Row, Col } from './Grid'

class Page extends Component {
 
  render() {

    const styles = {
      container:{
        marginTop:'20px'
      }
    }
  
    var width = parseInt(this.props.width)
    width = isNaN(width) ? 6 : width
    const otherWidth = (12-width)/2;

    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title={this.props.title}
          zDepth={0}
        />

        <Container style={styles.container}>
          <Row>
            <Col md={otherWidth}></Col>
            <Col md={width}>
              {this.props.children}
            </Col>
            <Col md={otherWidth}></Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default Page