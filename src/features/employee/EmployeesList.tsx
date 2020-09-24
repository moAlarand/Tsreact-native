import React from 'react';
import {EmployeeCard} from '../../components';
import {AppList} from '../../common';
import {Employee} from '../../data/models/employee';

const employees: Employee[] = [
  {
    id: 1,
    name: 'ali',
    img:
      'https://cdn.shrm.org/image/upload/c_crop%2ch_705%2cw_1254%2cx_0%2cy_15/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3d',
  },
  {
    id: 1,
    name: 'ali',
    img:
      'https://cdn.shrm.org/image/upload/c_crop%2ch_705%2cw_1254%2cx_0%2cy_15/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3d',
  },
  {
    id: 1,
    name: 'ali',
    img:
      'https://cdn.shrm.org/image/upload/c_crop%2ch_705%2cw_1254%2cx_0%2cy_15/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3d',
  },
  {
    id: 1,
    name: 'ali',
    img:
      'https://cdn.shrm.org/image/upload/c_crop%2ch_705%2cw_1254%2cx_0%2cy_15/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3d',
  },
  {
    id: 1,
    name: 'ali',
    img:
      'https://cdn.shrm.org/image/upload/c_crop%2ch_705%2cw_1254%2cx_0%2cy_15/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3d',
  },
  {
    id: 1,
    name: 'ali',
    img:
      'https://cdn.shrm.org/image/upload/c_crop%2ch_705%2cw_1254%2cx_0%2cy_15/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3d',
  },
  {
    id: 1,
    name: 'ali',
    img:
      'https://cdn.shrm.org/image/upload/c_crop%2ch_705%2cw_1254%2cx_0%2cy_15/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3d',
  },
  {
    id: 1,
    name: 'ali',
    img:
      'https://cdn.shrm.org/image/upload/c_crop%2ch_705%2cw_1254%2cx_0%2cy_15/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3d',
  },
  {
    id: 1,
    name: 'ali',
    img:
      'https://cdn.shrm.org/image/upload/c_crop%2ch_705%2cw_1254%2cx_0%2cy_15/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3d',
  },
  {
    id: 1,
    name: 'ali',
    img:
      'https://cdn.shrm.org/image/upload/c_crop%2ch_705%2cw_1254%2cx_0%2cy_15/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3d',
  },
  {
    id: 1,
    name: 'ali',
    img:
      'https://cdn.shrm.org/image/upload/c_crop%2ch_705%2cw_1254%2cx_0%2cy_15/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3d',
  },
  {
    id: 1,
    name: 'ali',
    img:
      'https://cdn.shrm.org/image/upload/c_crop%2ch_705%2cw_1254%2cx_0%2cy_15/c_fit%2cf_auto%2cq_auto%2cw_767/v1/Legal%20and%20Compliance/reviewing_paperwork_and_on_computer_pierld?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjE1LCJ4MiI6MTI1NCwieTIiOjcyMCwidyI6MTI1NCwiaCI6NzA1fX0%3d',
  },
];

export const EmployeeList: React.FC = () => {
  return (
    <AppList<Employee>
      style={{flex: 1}}
      contentContainerStyle={{
        padding: 10,
      }}
      data={employees}
      renderItem={({item}) => <EmployeeCard employee={item} />}
    />
  );
};
