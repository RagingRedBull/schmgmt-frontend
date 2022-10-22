import { Table, Typography } from "antd";
const { Title, Paragraph } = Typography;
const data = [
    {
        key: '1',
        code: 'CSELEC02',
        desc: 'Core Java Programming 2',
        units: '3.0',
        section: 'SEG22',
        midtermGrade: '1.75',
        finalGrade: '1.25'
    },
    {
        key: '2',
        code: 'CSELEC03',
        desc: 'Fundamentals of Web Programming',
        units: '3.0',
        section: 'SEG22',
        midtermGrade: '1.00',
        finalGrade: '1.00'
    },
    {
        key: '3',
        code: 'CSELEC04',
        desc: 'Unified Modelling Language',
        units: '3.0',
        section: 'SEG22',
        midtermGrade: '1.00',
        finalGrade: '1.00'
    },
];

const columns = [
    {
        title: 'Subject Code',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Description',
        dataIndex: 'desc',
        key: 'desc',
    },
    {
        title: 'Units',
        dataIndex: 'units',
        key: 'units',
    },
    {
        title: 'Section',
        dataIndex: 'section',
        key: 'section',
    },
    {
        title: 'Midterm Grade',
        dataIndex: 'midtermGrade',
        key: 'midtermGrade',
    },
    {
        title: 'Final Grade',
        dataIndex: 'finalGrade',
        key: 'finalGrade',
    },
];

const GradesTableComponent = () => {
    return <>
        <Typography>
            <Title level={4}>SY 2022 2023</Title>
            <Paragraph>SEM 1</Paragraph>
        </Typography>
        <Table columns={columns} dataSource={data} bordered pagination={false}/>
    </>;
};

export default GradesTableComponent;