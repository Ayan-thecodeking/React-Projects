import { InfoCircleOutlined, UserOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined, CommentOutlined } from '@ant-design/icons';
import { Input, Tooltip, Button } from 'antd';
import './antd.css'
const Antd = () => (

    <div className="antdForm">
        <CommentOutlined style={{ fontSize: '100px', color: '#ffff', margin: '40px' }} />
        <Input
            placeholder="Enter your username"
            size='default'
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
                <Tooltip title="Extra information">
                    <InfoCircleOutlined
                        style={{
                            color: 'rgba(0,0,0,.45)',
                        }}
                    />
                </Tooltip>
            }
            style={{
                margin: '10px',
            }}
        />
        <Input.Password
            placeholder="input password"
            size='default'
            prefix={<LockOutlined className="site-form-item-icon" />}

            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            style={{
                marginBottom: '10px',


            }}
        />
        <Button size='default'
            style={{
                margin: '15px',
            }} block>LOGIN</Button>

    </div>
);
export default Antd;