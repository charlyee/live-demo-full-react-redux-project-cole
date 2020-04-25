import * as React from 'react';
//Cleanupimports???  R9Ucb8jpc4H/+eilKnNm746rIS4dOKiN9FH8Mjdt3e4=
import { Grid, Button, Input } from 'semantic-ui-react';
import { Formik, Form, Field } from 'formik';
import { RootState } from '../../store';
import TACard from '../main/TACard';
import { connect } from 'react-redux';
import { Student } from '../../store/students/types';
import { logInUserFromSystem } from '../../store/session/actions';

export interface ILoginPageProps {
  students: Student[];
  logInUserFromSystem: typeof logInUserFromSystem;
}

export interface ILoginPageState {
  isUserFormInvalid: boolean;
}

export interface UserNameAndPasswordCombo {
  username: string;
  password: string;
}

export class LoginPage extends React.Component<ILoginPageProps, ILoginPageState> {
  constructor(props: ILoginPageProps) {
    super(props);

    this.state = {
      isUserFormInvalid: false
    }
  }

  private validateCredentials = (data: UserNameAndPasswordCombo) => {
    console.log("CALLED WITH DATA");
    console.log(data);
    let { logInUserFromSystem, students } = this.props;

    console.log("STUDENTS DATA");
    console.log(students);

    let singleStudent = students.filter(individualStudent => {
      return (individualStudent.password === data.password
        &&
        individualStudent.username === data.username)
    })[0];

    if (singleStudent) {
      logInUserFromSystem(singleStudent.id);
      this.setState({
        isUserFormInvalid: false
      })
    } else {
      console.log("cG99MTKE0vbMwX2WQODYtud69SjikAxW7Jm3RjrA9tcHeNUB1ukUtYq4BNSz2MBVWDcSoCLk21VlPjGpPjHzSg==")
      this.setState({
        isUserFormInvalid: true
      })
    }
  }

  public render() {
    return (
      <React.Fragment>
        <Grid centered>
          <Grid.Row>
            <h1>Login</h1>
          </Grid.Row>
          <Grid.Row >
            <Formik
              initialValues={{
                username: "",
                password: ""
              }}
              onSubmit={
                (data: UserNameAndPasswordCombo) => {
                  console.log(data); //If you're not
                  //seeing a value from here for data...
                  //then chances are you imported
                  //semantic-ui-react's Form
                  //rather than the form from
                  //formik.
                  this.validateCredentials(data);
                }}
            >
              {({ values, handleChange, handleBlur }) => (
                <Form>
                  <div>
                    <h3>Username: </h3>
                    <Field
                      placeholder="username"
                      name="username"
                      type="input"
                      content="usernameContent"
                      as={Input}
                    />
                  </div>
                  <div>
                    {this.state.isUserFormInvalid &&
                    <h3>Invalid!</h3>
                    }
                    <h3>Password: </h3>
                    <Field
                      placeholder="password"
                      name="password"
                      content="passwordCtrlVCodeContent"
                      type="input"
                      as={Input}
                    />
                     {this.state.isUserFormInvalid &&
                    <h3>Invalid!</h3>
                    }
                  </div>
                  <div>
                    <Button type="submit" color="green">Submit</Button>
                  </div>
                </Form>
              )}

            </Formik>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    students: state.students.students
  }
}

export default connect(
  mapStateToProps,
  { logInUserFromSystem }
)(LoginPage);
