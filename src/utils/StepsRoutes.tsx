import Step1 from "@/components/steps/Step1";
import Step2 from "@/components/steps/Step2";
import Step3 from "@/components/steps/Step3";
import Step4 from "@/components/steps/Step4";
import Step5 from "@/components/steps/Step5";
import Summary from "@/components/steps/Summary";

const steps = [
    {
      component: Step1,
      path: "datos-cliente",
      order: 1,
      description: "Nombre y apellidos",
      buttons: {
        back:false,
        next:true
      }
    },
    {
      component: Step2,
      path: "correo",
      order: 2,
      description: "Correo",
      buttons: {
        back:true,
        next:true
      }
    },
    {
      component: Step3,
      path: "direccion-apartamento",
      order: 3,
      description: "Dirección del apartamento",
      buttons: {
        back:true,
        next:true
      }
    },
    {
      component: Step4,
      path: "numero-piso",
      order: 4,
      description: "Número de piso",
      buttons: {
        back:true,
        next:true
      }
    },
    {
      component: Step5,
      path: "opciones",
      order: 5,
      description: "Opciones del apartamento",
      buttons: {
        back:true,
        next:true
      }
    },
    {
        component:Summary,
        path: "resumen",
      order: 6,
      description: "Resumen del formulario",
      buttons: {
        back:true,
        next:false
      }
    }
  ];
  
export default steps