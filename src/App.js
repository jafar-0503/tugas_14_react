import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Table, Label, Menu,
        Search, Icon, Feed, Image, List, Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return(
      <div><br />
      <Grid textAlign='center'>
      <Grid.Column style={{ maxWidth: 1200 }}>
      <Table celled style={{ padding: '10px'}}>

        <Table.Header>
          <Table.Row textAlign='right'>
            <Table.HeaderCell colSpan='2'>
              <Search size='large' placeholder='Search document...' />
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row textAlign='center'>
            <Table.HeaderCell>Nama Document</Table.HeaderCell>
            <Table.HeaderCell>Jenis File</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Label ribbon>Panduan Belajar Javascript</Label>
            </Table.Cell>
            <Table.Cell textAlign='center'>PDF</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Panduan Belajar CSS</Table.Cell>
            <Table.Cell textAlign='center'>PDF</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Panduan Belajar REACT JS</Table.Cell>
            <Table.Cell textAlign='center'>PDF</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='2'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a' active>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a'>5</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>

      </Table>
      </Grid.Column>
      </Grid>

      <Container>
      <Grid>
      <Grid.Column width={12}>
        <Feed size='tiny'>
          <Feed.Event>
            <Feed.Label>
              <Image src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
            </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>Andika </Feed.User> added you as a friend
              <Feed.Date>3 Hours Ago</Feed.Date>
            </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' />4 Likes
            </Feed.Like>
          </Feed.Meta>
          </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label icon='pencil' />
            <Feed.Content>
              <Feed.Summary>
                You submitted a new post to the page
                <Feed.Date>3 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                Saya Senang Sekali bisa Belajar Bahasa Pemograman Disini.
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />11 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>

          <Feed.Event>
            <Feed.Label>
              <Image src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
            </Feed.Label>
            <Feed.Content>
              <Feed.Date>4 days ago</Feed.Date>
              <Feed.Summary>
                David added 2 New Images
              </Feed.Summary>

              <Feed.Extra images>
                <Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />&nbsp;
                <Image src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
              </Feed.Extra>

              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />2 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Grid.Column>

      <Grid.Column width={4} size='large'>
        <List>
          <h4>Website Terkait</h4>
          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <a href='http://www.google.com' target='blank'>Google</a>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <a href='http://www.Facebook.com' target='blank'>Facebook</a>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <a href='http://www.semantic-ui.com' target='blank'>Semantic-ui</a>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <a href='http://www.niomic.com' target='blank'>Niomic</a>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name='linkify' />
            <List.Content>
              <a href='http://www.React.com' target='blank'>React</a>
            </List.Content>
          </List.Item>

        </List>
      </Grid.Column>
      </Grid>
    </Container>
    </div>
    )
  }
}
export default App;
