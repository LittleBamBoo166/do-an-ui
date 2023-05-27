import {v4 as uuidV4} from "uuid";

const events = [
  {
    id: '42901cf6-75b7-4734-b83d-bffaaede745c',
    name: 'Cơn bão số 6 - Bão Noru',
    type: 'Bão',
    createdBy: {
      id: 'd01e3450-e1dd-467f-a2b4-4e71d0ecb541',
      fullName: 'Nguyễn Thị Phi Thương'
    },
    createdAt: '2023-02-26T01:34:48.718Z',
    startDate: '2023-02-26T01:34:48.718Z',
    endDate: '2023-05-26T01:34:48.718Z',
    description: 'Bão Noru, còn được gọi là bão cuồng phong Karding, siêu bão Noru hoặc bão số 4 năm 2022, là một siêu bão được hình thành từ phía đông của Philippines.',
    closedBy: {
      id: 'd2fb240e-3624-489d-a652-ff5ecb10f813',
      fullName: 'Nguyễn Phước Minh Hiếu'
    },
    status: 'OPEN',
    year: 2022,
    lOEventSubscriptions: [
      {
        id: '5a06fcaa-2bfd-4b22-bd7b-0751e1b6772a',
        createdAt: '2023-02-27T01:34:48.718Z',
        updatedAt: '2023-02-27T01:34:48.718Z',
        localOfficer: {
          id: 'e31ac2b8-79de-4b12-b5d4-ead7b7fd21f7',
          fullName: 'Lê Thị Anh',
          localOfficeWard: {
            path: 'A Dơi, Hướng Hóa, Quảng Trị'
          }
        },
        householdsNumber: 5,
        isCompleted: false,
        isCanceled: false,
        houseHolds: [
          {
            id: '1ad65146-8910-4fd6-8e26-d081de36b74b',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0368974513',
            isCompleted: false,
          },
          {
            id: 'a8e5fa87-0b95-4d2d-88d3-9e5bdf304499',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Tám',
            address: 'Đội 7',
            phoneNumber: '0346597941',
            isCompleted: false,
          },
          {
            id: '3f3c7f0c-114b-4523-9c9d-4795ca26c88c',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Chín',
            address: 'Đội 7',
            phoneNumber: '0297841351',
            isCompleted: false,
          },
          {
            id: 'd5aa2d10-b1e0-4fe0-97f6-51663452451e',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Mười',
            address: 'Đội 7',
            phoneNumber: '0369784565',
            isCompleted: false,
          },
          {
            id: '0d52fd97-b05e-416e-a9f5-734d39d559c0',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Nguyễn Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0397416595',
            isCompleted: false,
          },
        ],
        rescueTeamSubscriptions: [
          {
            id: 'c20335e6-dff7-4b06-a68d-5d518917e2a2',
            createdAt: '2023-02-28T01:34:48.718Z',
            updatedAt: '2023-02-28T01:34:48.718Z',
            rescueTeamUser: {
              id: '76804119-148d-4da9-a697-202d1a914587',
              rescueTeamName: 'Ánh Sao'
            },
            isDone: false,
            isApproved: true,
            isRejected: false,
            reliefPlan: {
              id: 'b786cc74-ebff-4fea-919d-cea0a94ad132',
              createdAt: '2023-03-01T01:34:48.718Z',
              updatedAt: '2023-03-01T01:34:48.718Z',
              startAt: '2023-03-15T01:34:48.718Z',
              endAt: '2023-03-18T01:34:48.718Z',
              aidPackage: {
                id: 'bf054fde-cb8b-41ad-bcda-28651402ec67',
                createdAt: '2023-03-01T01:34:48.718Z',
                updatedAt: '2023-03-01T01:34:48.718Z',
                amountOfMoney: 10000000,
                totalValue: 10200000,
                neccessaries: [
                  {
                    id: '94b93577-334e-4593-90c9-203d0ddd6a7c',
                    createdAt: '2023-03-01T01:34:48.718Z',
                    updatedAt: '2023-03-01T01:34:48.718Z',
                    name: 'Gạo (kg)',
                    quantity: 10
                  },
                  {
                    id: '605b0ebf-9fb4-4b3e-9024-6cef2f7c0183',
                    createdAt: '2023-03-01T01:34:48.718Z',
                    updatedAt: '2023-03-01T01:34:48.718Z',
                    name: 'Mì tôm (Thùng)',
                    quantity: 2
                  },
                  {
                    id: '1eec86e7-0e4f-44cc-8639-aa48b0e9d75a',
                    createdAt: '2023-03-01T01:34:48.718Z',
                    updatedAt: '2023-03-01T01:34:48.718Z',
                    name: 'Nước mắm (chai)',
                    quantity: 1
                  },
                ]
              },
              neccessaries: [
                {
                  id: 'bf912569-83cf-40a6-8fb1-811a2f43ea6a',
                  createdAt: '2023-03-01T01:34:48.718Z',
                  updatedAt: '2023-03-01T01:34:48.718Z',  
                  name: 'Gạo (kg)',
                },
                {
                  id: '24fb050c-26ae-4e63-a9d3-f1c0f9ec3c2b',
                  createdAt: '2023-03-01T01:34:48.718Z',
                  updatedAt: '2023-03-01T01:34:48.718Z',  
                  name: 'Mì tôm (thùng)',
                },
                {
                  id: 'a3c42875-48cd-46af-9956-8681ff3976b5',
                  createdAt: '2023-03-01T01:34:48.718Z',
                  updatedAt: '2023-03-01T01:34:48.718Z',  
                  name: 'Nước mắm (chai)',
                }
              ]
            },
            donationPost: {
              id: '9a97c6a0-0dc9-4f33-8fdc-4ebe6049a4b1',
              createdAt: '2023-02-29T01:34:48.718Z',
              updatedAt: '2023-02-29T01:34:48.718Z',
              description: 'Mảnh đất Quảng Trị, khúc ruột của miền Trung vừa trải qua cơn bão Noru với sức tàn phá khủng khiếp. 3 người mất tích, hơn 345 căn nhà bị hư hỏng nặng nề. Người dân chủ yếu sinh sống bằng nghề nông, thu nhập vốn ít ỏi, nay lại càng khó khăn khi phải gồng gánh những tổn thất do cơn bão để lại. Các mạnh thường quân, các nhà hảo tâm xin hãy đồng hành cùng đội cứu trợ Mây, giúp sức cho bà con nơi đây được tái ổn định cuộc sống.',
              moneyNeed: 50000000,
              deadline: '2023-03-07T01:34:48.718Z',
              status: 'INCOMPLETE',
              donatedMoney: 15000000,
              donationNeccessaries: [
                {
                  id: '9cb08009-3803-4b5b-bf67-e10a36281f1f',
                  createdAt: '2023-02-29T01:34:48.718Z',
                  updatedAt: '2023-02-29T01:34:48.718Z',
                  quantity: 50,
                  donatedQuantity: 10,
                  name: 'Gạo (kg)'
                },
                {
                  id: 'acbc7222-8763-43c0-b6fc-fc758f89ddb4',
                  createdAt: '2023-02-29T01:34:48.718Z',
                  updatedAt: '2023-02-29T01:34:48.718Z',
                  quantity: 5,
                  donatedQuantity: 2,
                  name: 'Nước mắm (chai)'
                },
              ],
              sponsorDonations: [
                {
                  id: 'a1930b8d-d81e-4508-84fd-70c3c6450556',
                  createdAt: '2023-03-01T01:34:48.718Z',
                  updatedAt: '2023-03-01T01:34:48.718Z',
                  sponsorUser: {
                    id: 'dc052e58-01f4-4b1c-9a66-3a667cb0c86',
                    name: 'Văn Mai Hương'
                  },
                  status: 'COMPLETE',
                  money: 10000000,
                },
                {
                  id: '6ade4764-5ed7-40e0-b066-7d5d65dc971c',
                  createdAt: '2023-03-01T01:34:48.718Z',
                  updatedAt: '2023-03-01T01:34:48.718Z',
                  sponsorUser: {
                    id: 'dc052e58-01f4-4b1c-9a66-3a667cb0c86',
                    name: 'Đỗ Thị Ngọc Bích'
                  },
                  status: 'PENDING',
                  money: 5000000,
                },
                {
                  id: 'eb2d0755-1004-4db4-977c-11fa8d70fb5b',
                  createdAt: '2023-03-01T01:34:48.718Z',
                  updatedAt: '2023-03-01T01:34:48.718Z',
                  sponsorUser: {
                    id: 'dc052e58-01f4-4b1c-9a66-3a667cb0c86',
                    name: 'Văn Thị Cẩm Lan'
                  },
                  status: 'PENDING',
                  money: 0,
                  details: [
                    {
                      id: 'dc052e58-01f4-4b1c-9a66-3a667cb0c86f',
                      createdAt: '2023-03-01T01:34:48.718Z',
                      updatedAt: '2023-03-01T01:34:48.718Z',
                      quantity: 2,
                      name: 'Nước mắm (chai)'
                    },
                    {
                      id: '28ac8dae-ba3e-40da-9922-c9c7994ffdec',
                      createdAt: '2023-03-01T01:34:48.718Z',
                      updatedAt: '2023-03-01T01:34:48.718Z',
                      quantity: 10,
                      name: 'Gạo (kg)'
                    },
                  ]
                },
              ]
            }
          }
        ]
      },
      {
        id: '622b57f6-f6b8-4509-9fd4-dad22cfef522',
        createdAt: '2023-02-27T01:34:48.718Z',
        updatedAt: '2023-02-27T01:34:48.718Z',
        localOfficer: {
          id: '0d3896fd-5569-4b42-b79a-6c10aa490d9c',
          fullName: 'Lê Thị Hải Phượng',
          localOfficeWard: {
            path: 'Ba Tầng, Hướng Hóa, Quảng Trị'
          }
        },
        householdsNumber: 5,
        isCompleted: false,
        isCanceled: false,
        houseHolds: [
          {
            id: '1b38fe8d-1559-44fb-be48-1b47bf2ba245',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0368974513',
            isCompleted: false,
          },
          {
            id: '3eae0c15-97a4-4ef1-bf6e-c24430099706',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Tám',
            address: 'Đội 7',
            phoneNumber: '0346597941',
            isCompleted: false,
          },
          {
            id: 'e6e0035f-4a2b-4728-a677-522da88c3207',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Chín',
            address: 'Đội 7',
            phoneNumber: '0297841351',
            isCompleted: false,
          },
          {
            id: '0e2eeeda-5d9d-475a-852a-d7c97b16c295',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Mười',
            address: 'Đội 7',
            phoneNumber: '0369784565',
            isCompleted: false,
          },
          {
            id: '3363ef4c-e7b9-4004-a1ac-c2a484adb565',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Nguyễn Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0397416595',
            isCompleted: false,
          },
        ],
      },
      {
        id: '4438cf0b-4cd1-49d0-ba70-99ae7fb3f5ae',
        createdAt: '2023-02-27T01:34:48.718Z',
        updatedAt: '2023-02-27T01:34:48.718Z',
        localOfficer: {
          id: '2be881da-f978-471e-88f9-00c93bfad071',
          fullName: 'Lê Văn Tám',
          localOfficeWard: {
            path: 'Hướng Tân, Hướng Hóa, Quảng Trị'
          }
        },
        householdsNumber: 5,
        isCompleted: false,
        isCanceled: false,
        houseHolds: [
          {
            id: '1ad86162-944c-4a28-add3-09a71dbae359',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0368974513',
            isCompleted: false,
          },
          {
            id: '9ce59e4e-d38a-4d89-90b3-a1f11512cf4a',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Tám',
            address: 'Đội 7',
            phoneNumber: '0346597941',
            isCompleted: false,
          },
          {
            id: '61e29b8f-e9b2-49a2-9ebc-df149da87e3e',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Chín',
            address: 'Đội 7',
            phoneNumber: '0297841351',
            isCompleted: false,
          },
          {
            id: '9f6ff9da-d981-4d25-9fe0-7fc3b22c3862',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Mười',
            address: 'Đội 7',
            phoneNumber: '0369784565',
            isCompleted: false,
          },
          {
            id: '4d72d4db-e0f0-4875-b15b-1c760fb60cee',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Nguyễn Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0397416595',
            isCompleted: false,
          },
        ],
      },
      {
        id: '0cf1e244-dcbc-4834-ba94-0337b5ececca',
        createdAt: '2023-02-27T01:34:48.718Z',
        updatedAt: '2023-02-27T01:34:48.718Z',
        localOfficer: {
          id: '14a67f99-2d39-42f3-affd-7c248c4aa412',
          fullName: 'Lê Thị Anh Thu',
          localOfficeWard: {
            path: 'Hướng Linh, Hướng Hóa, Quảng Trị'
          }
        },
        householdsNumber: 5,
        isCompleted: false,
        isCanceled: false,
        houseHolds: [
          {
            id: '2b1ec6a5-8c6d-4fe0-ac51-65dadd55900d',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0368974513',
            isCompleted: false,
          },
          {
            id: 'bde3b186-f875-42df-b4c3-196bd91c4f97',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Tám',
            address: 'Đội 7',
            phoneNumber: '0346597941',
            isCompleted: false,
          },
          {
            id: 'b1628e0e-ba9b-46c4-a570-283d0ea2879f',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Chín',
            address: 'Đội 7',
            phoneNumber: '0297841351',
            isCompleted: false,
          },
          {
            id: 'ab540e21-ddff-4fe7-bd20-b1a35af6a7ff',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Mười',
            address: 'Đội 7',
            phoneNumber: '0369784565',
            isCompleted: false,
          },
          {
            id: '44e105e6-afc1-4e18-bb25-c62cf1729b9f',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Nguyễn Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0397416595',
            isCompleted: false,
          },
        ],
      },
      {
        id: 'ccb49280-3d94-47ec-b6fd-98a12ab8f2d7',
        createdAt: '2023-02-27T01:34:48.718Z',
        updatedAt: '2023-02-27T01:34:48.718Z',
        localOfficer: {
          id: 'a6d65a70-62a0-4ff2-ae9a-7c46e5991ed1',
          fullName: 'Lê Thị Anh',
          localOfficeWard: {
            path: 'A Dơi, Hướng Hóa, Quảng Trị'
          }
        },
        householdsNumber: 5,
        isCompleted: false,
        isCanceled: false,
        houseHolds: [
          {
            id: '64b9cf61-0fa5-484c-a97e-6490789c6bf9',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0368974513',
            isCompleted: false,
          },
          {
            id: '5d07703c-6527-47b5-9c2e-9e7d86db244b',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Tám',
            address: 'Đội 7',
            phoneNumber: '0346597941',
            isCompleted: false,
          },
          {
            id: '64071dbe-33db-49b1-952e-2d324bb9174a',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Chín',
            address: 'Đội 7',
            phoneNumber: '0297841351',
            isCompleted: false,
          },
          {
            id: '2ce4707b-5bdd-4891-a7c2-e9c6ec630672',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Mười',
            address: 'Đội 7',
            phoneNumber: '0369784565',
            isCompleted: false,
          },
          {
            id: 'ebe389c1-239c-4771-bee0-9e10d8a43a5b',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Nguyễn Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0397416595',
            isCompleted: false,
          },
        ],
      }
    ]
  },
  {
    id: 'c67e7abe-b394-4254-9d7e-47aa9bbdc7c1',
    name: 'Sạt lở đất ở Kỳ Sơn, Nghệ An',
    type: 'Sạt lở',
    createdBy: {
      id: '017e3229-541a-43da-bc9a-3c6f11d11430',
      fullName: 'Nguyễn Hải Đăng'
    },
    createdAt: '2023-04-21T01:34:48.718Z',
    startDate: '2023-04-21T01:34:48.718Z',
    endDate: '2023-05-29T01:34:48.718Z',
    description: 'Vừa qua, huyện Kỳ Sơn, Nghệ An đã xảy ra một trận sạt lở đất nghiêm trọng tại vùng núi Ba Sơn, làm sụp đổ 26 nhà dân, 12 ngôi nhà bị hư hại nặng. Hiện tại, bà con đang sinh sống trong các túp lều dựng tạm với nhiều khó khăn, bất tiện.',
    closedBy: {
      id: '47290a4b-6ba6-4b85-b4b7-51d5a2f36f4b',
      fullName: 'Lê Thị Hải Châu'
    },
    status: 'OPEN',
    year: 2023,
    lOEventSubscriptions: [
      {
        id: 'd8da3949-32c7-4bfd-ac5a-2ff8fa6d29d3',
        createdAt: '2023-02-27T01:34:48.718Z',
        updatedAt: '2023-02-27T01:34:48.718Z',
        localOfficer: {
          id: '077b4c9d-a0d6-450b-ac2d-1a1af7b5ce35',
          fullName: 'Lê Thị Anh',
          localOfficeWard: {
            path: 'Bảo Nam, Kỳ Sơn, Nghệ An'
          }
        },
        householdsNumber: 5,
        isCompleted: false,
        isCanceled: false,
        houseHolds: [
        ],
      },
      {
        id: 'b0f8dbd8-00a2-45b6-9b5d-4811e75f26f9',
        createdAt: '2023-02-27T01:34:48.718Z',
        updatedAt: '2023-02-27T01:34:48.718Z',
        localOfficer: {
          id: '7298ff29-ce69-42ce-96e0-c541f4fa8655',
          fullName: 'Lê Thị Phượng',
          localOfficeWard: {
            path: 'Bảo Thắng, Kỳ Sơn, Nghệ An'
          }
        },
        householdsNumber: 5,
        isCompleted: false,
        isCanceled: false,
        houseHolds: [
          {
            id: '29a2c004-23eb-4761-b58c-11e5cee74dd7',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0368974513',
            isCompleted: false,
          },
          {
            id: 'f6267cd4-dc0e-4da0-b06f-b6e008b9dc61',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Tám',
            address: 'Đội 7',
            phoneNumber: '0346597941',
            isCompleted: false,
          },
          {
            id: '70bd3a4f-5e90-4835-88c2-977652b20c09',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Chín',
            address: 'Đội 7',
            phoneNumber: '0297841351',
            isCompleted: false,
          },
          {
            id: 'bb8cabcd-ae31-4980-8dba-6e835360317f',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Mười',
            address: 'Đội 7',
            phoneNumber: '0369784565',
            isCompleted: false,
          },
          {
            id: '37efa2d7-3046-44e5-9a23-e88c4aef2e0d',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Nguyễn Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0397416595',
            isCompleted: false,
          },
        ],
      },
      {
        id: 'f55f3ff5-b343-4adf-b1f7-a2fd6770c7ae',
        createdAt: '2023-02-27T01:34:48.718Z',
        updatedAt: '2023-02-27T01:34:48.718Z',
        localOfficer: {
          id: '53d2d5b8-83f2-4445-9102-fda0bee4fc10',
          fullName: 'Lê Văn Tám',
          localOfficeWard: {
            path: 'Huồi Tụ, Kỳ Sơn, Nghệ An'
          }
        },
        householdsNumber: 5,
        isCompleted: false,
        isCanceled: false,
        houseHolds: [
          {
            id: '6e1d2028-10b3-4168-a0c6-9bdda2dd31ba',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0368974513',
            isCompleted: false,
          },
          {
            id: '07cb1fcf-da42-4709-b92b-4ab603cabba8',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Tám',
            address: 'Đội 7',
            phoneNumber: '0346597941',
            isCompleted: false,
          },
          {
            id: 'ca09498e-de5e-4cf7-b352-0e99327e6c44',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Chín',
            address: 'Đội 7',
            phoneNumber: '0297841351',
            isCompleted: false,
          },
          {
            id: 'c2fef869-09c8-4022-bb2f-824311fdfcae',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Mười',
            address: 'Đội 7',
            phoneNumber: '0369784565',
            isCompleted: false,
          },
          {
            id: 'c470c114-b05d-40bc-9526-d68c011121c0',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Nguyễn Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0397416595',
            isCompleted: false,
          },
        ],
      },
      {
        id: '3351af6c-d1b9-4e69-be04-a619cad8850a',
        createdAt: '2023-02-27T01:34:48.718Z',
        updatedAt: '2023-02-27T01:34:48.718Z',
        localOfficer: {
          id: '6b33fe5b-c293-45ca-bedd-c3e13c3536d9',
          fullName: 'Lê Thị Anh Thu',
          localOfficeWard: {
            path: 'Hữu Lập, Kỳ Sơn, Nghệ An'
          }
        },
        householdsNumber: 5,
        isCompleted: false,
        isCanceled: false,
        houseHolds: [
          {
            id: '06d971cd-c879-4a1e-96fa-6016bc368558',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0368974513',
            isCompleted: false,
          },
          {
            id: 'e3a89ec0-de5a-417a-b90c-fa2facf28338',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Tám',
            address: 'Đội 7',
            phoneNumber: '0346597941',
            isCompleted: false,
          },
          {
            id: 'e3a89ec0-de5a-417a-b90c-fa2faef28338',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Chín',
            address: 'Đội 7',
            phoneNumber: '0297841351',
            isCompleted: false,
          },
          {
            id: 'de434c68-1acf-4d80-9273-80e0c209a8c5',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Lê Thị Mười',
            address: 'Đội 7',
            phoneNumber: '0369784565',
            isCompleted: false,
          },
          {
            id: 'e04080d5-cd55-4fdb-8d6a-c7cb842b3698',
            createdAt: '2023-02-27T01:34:48.718Z',
            updatedAt: '2023-02-27T01:34:48.718Z',
            name: 'Nguyễn Thị Bảy',
            address: 'Đội 7',
            phoneNumber: '0397416595',
            isCompleted: false,
          },
        ],
      }
    ]
  }
]

export default { events };