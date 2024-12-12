import React, { useEffect, useState } from "react";
import { LOCALHOST, OBS_ENDPOINT } from "@env";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Image,
} from "react-native";
import StepIndicatorComponent from "../components/pagination/StepIndicatorComponent";
import SeverityIndicator from "../components/SeverityIndicator";
import MainButton from "../components/buttons/MainButton";

const ClassificationModelScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  let { imageUri, imageUrl } = route.params || {}; // Recibe parámetros del paso anterior
  const [isLoading, setIsLoading] = useState(true); // Estado para la carga
  const [diagnosisResult, setDiagnosisResult] = useState<any>(null); // Datos del diagnóstico
  const [infection_percentage, setInfection_percentage] = useState<number>(0); // Porcentaje de infección
  const [severity, setSeverity] = useState<string>(""); // Grado de severidad
  const [disease_id, setDisease_id] = useState<number>(0); // Id de la enfermedad
  const labels = ["1", "2", "3"];
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

  // Llamar al API para crear un diagnóstico
  useEffect(() => {
    const createDiagnosis = async () => {
      try {
        setIsLoading(true); // Inicia la carga

        // Construir el URL de la imagen con los datos del .env
        const completeImageUrl = `${OBS_ENDPOINT}/${imageUrl}`;

        const diagnosisData = {
          user_id: 1, // Simulado
          plant_id: 1, // Simulado
          imageUrl: completeImageUrl, // URL de la imagen subida
        };

        console.log("Diagnosis data:", diagnosisData);

        const response = await fetch(`${LOCALHOST}/diagnoses`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(diagnosisData),
        });

        const result = await response.json();

        if (response.ok) {
          setDiagnosisResult(result); // Guarda el resultado completo
          setInfection_percentage(result.infection_percentage); // Guarda el porcentaje de infección
          setSeverity(result.background_removed_image); // string convertido a float
          setDisease_id(result.disease_id); // Guarda el id de la enfermedad

          Alert.alert("Éxito", "Diagnóstico creado exitosamente.");
        } else {
          console.error("Error al crear diagnóstico:", result);
          Alert.alert("Error", "Hubo un problema al crear el diagnóstico.");
        }
      } catch (error) {
        console.error("Error al llamar al API:", error);
        Alert.alert("Error", "Hubo un problema con el servidor.");
      } finally {
        setIsLoading(false); // Finaliza la carga
      }
    };

    createDiagnosis();
  }, [imageUrl]); // Se ejecuta al cargar y al cambiar la URL de la imagen

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

      {/* Step Indicator */}
      <View style={styles.stepIndicator}>
        <StepIndicatorComponent currentPosition={2} labels={labels} />
      </View>

      {/* Texto de instrucción */}
      <Text style={styles.instruction}>
        {isLoading
          ? "Analizando la enfermedad de la roya..."
          : "Resultado del análisis"}
      </Text>

      {/* Indicador de progreso */}
      <View style={styles.loaderContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#32CD32" />
        ) : disease_id === 1 ? (
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
            <Text style={styles.resultText}></Text>
            <SeverityIndicator />
          </View>
        ) : (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              Las hojas del maíz no presentan la enfermedad de la roya.
            </Text>
            <Image
              source={require("../../assets/images/Plantas/MaizSafe.webp")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
      </View>

      {/* Botones inferiores */}
      <View style={styles.footerButtons}>
        <MainButton
          title="Cancelar"
          onPress={() => navigation.goBack()}
          variant="secondary"
          style={styles.cancelButton}
        />
        <MainButton
          title="Siguiente"
          onPress={() =>
            navigation.navigate("ResultReportScreen", {
              imageUri,
              imageUrl,
              infection_percentage,
            })
          }
          variant="primary"
          disabled={isLoading || !diagnosisResult} // Desactivar si está cargando o no hay resultado
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
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
  stepIndicator: {
    marginVertical: 20,
  },
  instruction: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  loaderContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  resultContainer: {
    alignItems: "center",
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
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  footerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  cancelButton: {
    marginRight: 10,
  },
  imageHeader: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#00a8cc',
    marginBottom: 4,
  },
  headerEvaluation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 10,
  },
});

export default ClassificationModelScreen;
