import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MainButton from "../components/buttons/MainButton";

const ResultReportScreen = ({
  navigation,
  router,
}: {
  navigation: any;
  router: any;
}) => {
  const [infection_percentage, setInfection_percentage] =
    useState<number>(12.2); // Porcentaje de infección
  const data = [
    { grade: 0, range: "0%", color: "#649726" },
    { grade: 1, range: "0 - 5%", color: "#7FBE31" },
    { grade: 2, range: "5 - 10%", color: "#FBE36A" },
    { grade: 3, range: "10 - 25%", color: "#F99628" },
    { grade: 4, range: "25 - 50%", color: "#E36622" },
    { grade: 5, range: "> 50%", color: "#DC2D2D" },
  ];

  // Determinar el grado en base al porcentaje de infección
  const gradeInfo =
    data.find((item) => {
      if (item.grade === 0 && infection_percentage === 0) return true; // Para el grado 0
      if (item.grade === 1 && infection_percentage <= 5) return true;
      if (
        item.grade === 2 &&
        infection_percentage > 5 &&
        infection_percentage <= 10
      )
        return true;
      if (
        item.grade === 3 &&
        infection_percentage > 10 &&
        infection_percentage <= 25
      )
        return true;
      if (
        item.grade === 4 &&
        infection_percentage > 25 &&
        infection_percentage <= 50
      )
        return true;
      if (item.grade === 5 && infection_percentage > 50) return true;
      return false;
    }) || data[0]; // En caso de que no se encuentre un valor, se toma el primer grado

  return (
    <View style={styles.container}>
      {/* Header con título y subtítulo */}
      <View style={styles.headerEvaluation}>
        <View style={styles.header}>
          <Text style={styles.title}>Evaluación</Text>
          <Text style={styles.subtitle}>Maíz</Text>
        </View>
        <Image
          source={require("@/assets/images/Plantas/Corn.webp")}
          style={styles.imageHeader}
        />
      </View>

      {/* Reporte de diagnóstico */}
      <View style={styles.reportContainer}>
        <Text style={styles.reportText}>Reporte de diagnóstico</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            La hoja de la planta presenta la enfermedad de la roya.
          </Text>

          <View style={styles.detailContainer}>
            <View style={styles.resultCard}>
              <Text style={styles.resultText}>Porcentaje afectado</Text>
              <View style={styles.cardResult}>
                <Text style={styles.resultCardText}>
                  {infection_percentage}%
                </Text>
              </View>
            </View>
            <View style={styles.resultCard}>
              <Text style={styles.resultText}>Grado de Severidad</Text>
              <View
                style={[
                  styles.cardResult,
                  { backgroundColor: gradeInfo.color },
                ]}
              >
                <Text style={styles.resultCardText}>{gradeInfo.grade}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.resultText}>
            La Roya es una enfermedad causada por el hongo Puccinia polysora,
            usualmente en las etapas posteriores de crecimiento, en áreas
            tropicales.
          </Text>
        </View>
        <Text style={styles.reportText}>Tratamientos</Text>
        <View style={styles.resultContainer}>
          <View style={styles.recommendationCard}>
            <View style={styles.icon}>
              <Ionicons
                name="checkmark-circle-outline"
                size={25}
                color="#649726"
              />
            </View>
            <Text style={styles.resultText}>Tratar con insecticidas</Text>
          </View>
          <View style={styles.recommendationCard}>
            <View style={styles.icon}>
              <Ionicons
                name="checkmark-circle-outline"
                size={25}
                color="#649726"
              />
            </View>
            <Text style={styles.resultText}>Aplicar fungicida preventiva</Text>
          </View>
        </View>
      </View>

      {/* Botón para salir */}
      <MainButton
        title="Salir"
        onPress={() => navigation.navigate("Home")}
        variant="primary"
        style={styles.exitButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    color: "#007ACC",
  },
  reportContainer: {
    marginVertical: 0,
    alignItems: "center",
  },
  reportText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "left",
    marginBottom: 20,
  },
  exitButton: {
    marginTop: 20,
  },
  resultContainer: {
    alignItems: "center",
    paddingBottom: 30,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  resultCard: {
    width: "48%",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cardResult: {
    backgroundColor: "#0891B2",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 100,
  },
  resultCardText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  resultText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 2,
    textAlign: "left",
  },
  recommendationCard: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 16,
    marginVertical: 8,
    width: 360,
  },
  icon: {
    padding: 0,
  },
  imageHeader: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#00a8cc",
    marginBottom: 4,
  },
  headerEvaluation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginRight: 10,
    width: 360,
  },
});

export default ResultReportScreen;
