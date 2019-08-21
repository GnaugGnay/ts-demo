import Mock from 'mockjs';

const demo1 = Mock.mock(
    '/api/demo1', 'post', (req: any, res: any) => {
        return {
            code: 200,
            data: {
                data: 'hello world'
            }
        }
    }
);

export default { demo1 };