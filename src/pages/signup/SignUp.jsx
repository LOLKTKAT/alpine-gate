import React from 'react';
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody
} from '@nextui-org/react';
import NavBar from '../../components/Navbar';
import { signUpImg } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { SectionHeader } from '../../components/TextComponents';

export default function SignUp() {
  const [selected, setSelected] = React.useState('login');
  const navigate = useNavigate();

  return (
    <div className=" flex h-svh w-full flex-col items-center">
      <NavBar />
      <div className="mt-10" />
      <SectionHeader>
        Sign up to unloack the future of content creation
      </SectionHeader>
      <section className="flex flex-col items-center justify-center gap-8 p-8 px-4 md:flex-row lg:flex-row lg:px-8">
        <div className="h-80">
          <img
            className="h-full rounded-2xl object-cover"
            src={signUpImg}
            alt="signUpImg"
          />
        </div>
        <Card className="h-[400px] w-[340px] max-w-full">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Login">
                <form className="flex flex-col gap-4">
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <p className="text-center text-small">
                    Need to create an account?{' '}
                    <Link size="sm" onPress={() => setSelected('sign-up')}>
                      Sign up
                    </Link>
                  </p>
                  <div className="flex justify-end gap-2">
                    <Button
                      onClick={() => navigate('/dashboard')}
                      fullWidth
                      color="secondary"
                    >
                      Login
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab key="sign-up" title="Sign up">
                <form className="flex h-[300px] flex-col gap-4">
                  <Input
                    isRequired
                    label="Name"
                    placeholder="Enter your name"
                    type="password"
                  />
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <p className="text-center text-small">
                    Already have an account?{' '}
                    <Link size="sm" onPress={() => setSelected('login')}>
                      Login
                    </Link>
                  </p>
                  <div className="flex justify-end gap-2">
                    <Button
                      fullWidth
                      onClick={() => navigate('/dashboard')}
                      color="secondary"
                    >
                      Sign up
                    </Button>
                  </div>
                </form>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
