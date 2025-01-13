import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 20,
        backgroundColor: '#E4E4E4',
    },
    section: {
        marginBottom: 10,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
    },
    activityList: {
        marginLeft: 15,
        fontSize: 12,
    },
});

// PDF Component
const FullyCustomizePdf = ({ data }) => (
    <Document>
        {data.map((entry, index) => (
            <Page key={index} size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.header}>Day {entry.day}</Text>
                    <Text style={styles.text}>
                        Date: {new Date(entry.date).toLocaleDateString()}
                    </Text>
                    <Text style={styles.text}>
                        Location: {entry.selectedLocation}
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.header}>Selected Activities:</Text>
                    {entry.selectedActivities.map((activity, activityIndex) => (
                        <Text key={activityIndex} style={styles.activityList}>
                            - {activity.label}
                        </Text>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.header}>Selected Hotel:</Text>
                    <Text style={styles.text}>Name: {entry.selectedHotel.name}</Text>
                    <Text style={styles.text}>Hotel ID: {entry.selectedHotel.hotelId}</Text>
                </View>
            </Page>
        ))}
    </Document>
);

// Main Component
const FullyCustomizePdfDownload = ({ data }) => (
    <div>
        <button>
            <PDFDownloadLink
                document={<FullyCustomizePdf data={data} />}
                fileName="itinerary.pdf"
                style={{
                    textDecoration: 'none',
                    color: '#fff',
                    backgroundColor: '#007BFF',
                    padding: '10px 20px',
                    borderRadius: '5px',
                }}
            >
                {({ loading }) =>
                    loading ? 'Preparing document...' : 'Download PDF of Trip'
                }
            </PDFDownloadLink>
        </button>
    </div>
);

export default FullyCustomizePdfDownload;
