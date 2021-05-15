import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IPersona, Persona } from 'app/shared/model/persona.model';
import { PersonaService } from './persona.service';

@Component({
  selector: 'jhi-persona-update',
  templateUrl: './persona-update.component.html',
})
export class PersonaUpdateComponent implements OnInit {
  isSaving = false;
  fechaDp: any;

  editForm = this.fb.group({
    id: [],
    nombre: [],
    sexo: [],
    edad: [],
    peso: [],
    altura: [],
    imc: [],
    fecha: [],
  });

  constructor(protected personaService: PersonaService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ persona }) => {
      this.updateForm(persona);
    });
  }

  updateForm(persona: IPersona): void {
    this.editForm.patchValue({
      id: persona.id,
      nombre: persona.nombre,
      sexo: persona.sexo,
      edad: persona.edad,
      peso: persona.peso,
      altura: persona.altura,
      imc: persona.imc,
      fecha: persona.fecha,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const persona = this.createFromForm();
    if (persona.id !== undefined) {
      this.subscribeToSaveResponse(this.personaService.update(persona));
    } else {
      this.subscribeToSaveResponse(this.personaService.create(persona));
    }
  }

  private createFromForm(): IPersona {
    return {
      ...new Persona(),
      id: this.editForm.get(['id'])!.value,
      nombre: this.editForm.get(['nombre'])!.value,
      sexo: this.editForm.get(['sexo'])!.value,
      edad: this.editForm.get(['edad'])!.value,
      peso: this.editForm.get(['peso'])!.value,
      altura: this.editForm.get(['altura'])!.value,
      imc: this.editForm.get(['imc'])!.value,
      fecha: this.editForm.get(['fecha'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPersona>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
