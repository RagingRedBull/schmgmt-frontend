import { Table } from "antd";

const ScheduleTable = () => {
    const columns = [
        {
            title: 'Subject Code',
            dataIndex: 'subjectCode',
            key: 'subjectCode'
        },
        {
            title: 'Subject Name',
            dataIndex: 'subjectName',
            key: 'subjectName'
        },
        {
            title : 'Time',
            dataIndex: 'timeSlot',
            key: 'timeSlot'
        }
    ];

    const dummyData = [
        {
            key: '1',
            subjectCode: 'CSELEC06',
            subjectName: 'Advanced Web Programming',
            timeSlot: '2022-01-01 07:30:00+08 - 2022-01-01 11:00:00+08'
        }

    ];
    return <>
        <Table columns={columns} dataSource={dummyData} pagination={false}/>
    </>;
};

export default ScheduleTable;