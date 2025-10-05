import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Integritetspolicy för Power Up - appen om härskartekniker</Text>
      <Text style={styles.text}>
        Vi värnar om din integritet och säkerhet och vill att du ska känna dig trygg när du använder vår app. Denna integritetspolicy beskriver hur vi hanterar användardata.
      </Text>
      <Text style={styles.heading}>Utvecklarinformation</Text>
      <Text style={styles.text}>
        Appen är utvecklad i ett samarbete mellan Forum för genusvetenskap, Forum för digitalisering och institutionen för design vid Mittuniversitetet.
      </Text>
      <Text style={styles.heading}>Insamling av Data</Text>
      <Text style={styles.text}>
        Vår app samlar inte in några personliga eller känsliga användardata. Vi begär inte och sparar inte någon information om dig som användare.
      </Text>
      <Text style={styles.heading}>Användning av Data</Text>
      <Text style={styles.text}>
        Eftersom vi inte samlar in några personliga eller känsliga användardata, används inga sådana data av oss. Vår app fungerar utan behov av att lagra eller hantera någon personlig information.
      </Text>
      <Text style={styles.heading}>Delning av Data</Text>
      <Text style={styles.text}>
        Eftersom vi inte samlar in några personliga eller känsliga användardata, delas inga sådana data med tredje part.
      </Text>
      <Text style={styles.heading}>Kontakt</Text>
      <Text style={styles.text}>
        Om du har några frågor om denna integritetspolicy, vänligen kontakta oss på:
      </Text>
      <Text style={styles.text}>
        E-post: lisa.sallvin@gmail.com
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 60,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    marginVertical: 5,
  },
});

export default PrivacyPolicyScreen;
