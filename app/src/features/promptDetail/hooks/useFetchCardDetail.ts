// import { useState, useEffect } from 'react';
// import apiClient from '@/lib/api-client';
// import { PromptDetailType } from '@/features/promptDetail/types/promptDetailTypes';

// const useFetchProfile = () => {
//   const [promptDetail, setPromptDetail] = useState<PromptDetailType | null>(
//     null
//   );
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   useEffect(() => {
//     const handleFetchProfile = async () => {
//       try {
//         const endpoint = `/api/prompts/${promptId}`};
//         const response = await apiClient.get(endpoint);

//         if (response.status === 200) {
//           const profileData: promptDetail = {
//             userId: response.data.user_id,
//             name: response.data.name,
//             phoneNumber: response.data.phone_number,
//             companyName: response.data.company_name,
//             employeeCount: response.data.employee_count,
//             industry: response.data.industry,
//             position: response.data.position,
//             businessModel: response.data.business_model,
//           };
//           setProfile(profileData);
//         } else {
//           setErrorMessage('プロフィールの読み込みに失敗しました。');
//         }
//       } catch (error) {
//         console.error('Fetch Profile Failed:', error);
//         setErrorMessage('プロフィールの読み込みに失敗しました。');
//       }
//     };

//     handleFetchProfile();
//   }, []);

//   return { profile, errorMessage };
// };

// export default useFetchProfile;
