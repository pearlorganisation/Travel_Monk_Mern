// import React from 'react';
// import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//     page: {
//         padding: 20,
//         backgroundColor: '#E4E4E4',
//     },
//     section: {
//         marginBottom: 10,
//     },
//     header: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     text: {
//         fontSize: 12,
//         marginBottom: 5,
//     },
//     activityList: {
//         marginLeft: 15,
//         fontSize: 12,
//     },
// });

// const PrebuiltEnquiriesPdf = ({ data }) => (
//     <Document>
//         <Page size="A4" style={styles.page}>
//             {/* General Enquiry Details */}
//             <View style={styles.section}>
//                 <Text style={styles.header}>Enquiry Details</Text>
//                 <Text style={styles.text}>Name: {data.name}</Text>
//                 <Text style={styles.text}>Email: {data.email}</Text>
//                 <Text style={styles.text}>Mobile Number: {data.mobileNumber}</Text>
//                 <Text style={styles.text}>Package: {data.package.name}</Text>
//                 <Text style={styles.text}>Vehicle: {data.selectedVehicle.name}</Text>
//                 <Text style={styles.text}>Number of Travellers: {data.numberOfTravellers}</Text>
//                 <Text style={styles.text}>Estimated Price: ₹{data.estimatedPrice.toLocaleString()}</Text>
//                 <Text style={styles.text}>Message: {data.message}</Text>
//                 <Text style={styles.text}>
//                     Enquiry Created At: {new Date(data.createdAt).toLocaleString()}
//                 </Text>
//             </View>

//             {/* Itinerary Details */}
//             <View style={styles.section}>
//                 <Text style={styles.header}>Itinerary</Text>
//                 {data.itinerary.map((day, index) => (
//                     <View key={index} style={styles.section}>
//                         <Text style={styles.text}>Day {day.day}: {day.location}</Text>
//                         <Text style={styles.text}>Hotel: {day.selectedHotel.name}</Text>
//                         {day.selectedActivities.length > 0 ? (
//                             <Text style={styles.text}>Activities:</Text>
//                         ) : (
//                             <Text style={styles.text}>Activities: None</Text>
//                         )}
//                         {day.selectedActivities.map((activity, idx) => (
//                             <Text key={idx} style={styles.activityList}>
//                                 - {activity.label}
//                             </Text>
//                         ))}
//                     </View>
//                 ))}
//             </View>
//         </Page>
//     </Document>
// );

// const DownloadPrebuiltPdfButton = ({ data }) => (
//     <PDFDownloadLink
//         document={<PrebuiltEnquiriesPdf data={data} />}
//         fileName={`EnquiryDetails-${data.name}.pdf`}
//     >
//         {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
//     </PDFDownloadLink>
// );

// export default DownloadPrebuiltPdfButton;


import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        padding: 25,
        backgroundColor: '#FAFAFA',
    },
    section: {
        marginBottom: 20,
        padding: 15,
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 5,
    },
    subHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#555',
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
        lineHeight: 1.5,
        color: '#444',
    },
    activityList: {
        marginLeft: 15,
        fontSize: 12,
        color: '#555',
    },
    noActivitiesText: {
        fontStyle: 'italic',
        color: '#888',
    },
    terms: {
        marginTop: 30,
        padding: 15,
        border: '1px solid #ddd',
        borderRadius: 5,
        backgroundColor: '#f0f8ff',
    },
    termsHeader: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#003366',
    },
    termsText: {
        fontSize: 12,
        color: '#003366',
    },
});

const PrebuiltEnquiriesPdf = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* General Enquiry Details */}
            <View style={styles.section}>
                <Text style={styles.header}>Enquiry Details</Text>
                <Text style={styles.text}>Name: {data.name}</Text>
                <Text style={styles.text}>Email: {data.email}</Text>
                <Text style={styles.text}>Mobile Number: {data.mobileNumber}</Text>
                <Text style={styles.text}>Package: {data.package.name}</Text>
                <Text style={styles.text}>Vehicle: {data.selectedVehicle.name}</Text>
                <Text style={styles.text}>Number of Travellers: {data.numberOfTravellers}</Text>
                <Text style={styles.text}>
                    Estimated Price: {data.estimatedPrice.toLocaleString()}
                </Text>
                <Text style={styles.text}>Message: {data.message}</Text>
                <Text style={styles.text}>
                    Enquiry Created At: {new Date(data.createdAt).toLocaleString()}
                </Text>
            </View>

            {/* Itinerary Details */}
            <View style={styles.section}>
                <Text style={styles.header}>Itinerary</Text>
                {data.itinerary.map((day, index) => (
                    <View key={index} style={[styles.section, { borderWidth: 0 }]}>
                        <Text style={styles.subHeader}>
                            Day {day.day}: {day.location}
                        </Text>
                        <Text style={styles.text}>Hotel: {day.selectedHotel.name}</Text>
                        <Text style={styles.text}>
                            Activities:
                            {day.selectedActivities.length === 0 && (
                                <Text style={styles.noActivitiesText}> None</Text>
                            )}
                        </Text>
                        {day.selectedActivities.map((activity, idx) => (
                            <Text key={idx} style={styles.activityList}>
                                - {activity.label}
                            </Text>
                        ))}
                    </View>
                ))}
            </View>
              <View style={styles.terms}>
                    <Text style={styles.termsHeader}>Payment Terms and Conditions</Text>
                    <Text style={styles.termsText}>- Pay only 5000 upfront for booking the package.</Text>
                    <Text style={styles.termsText}>
                        - Pay the next 40% of the package price within 48 hours after our executive connects with you.
                    </Text>
                    <Text style={styles.termsText}>
                        - The remaining balance must be cleared as per the agreed payment schedule.
                    </Text>
                </View>
        </Page>
    </Document>
);

const DownloadPrebuiltPdfButton = ({ data }) => (
    <PDFDownloadLink
        document={<PrebuiltEnquiriesPdf data={data} />}
        fileName={`EnquiryDetails-${data.name}.pdf`}
    >
        {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
    </PDFDownloadLink>
);

export default DownloadPrebuiltPdfButton;
